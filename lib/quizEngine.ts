import { games, type Game } from "./games";

/* ─── Types ─── */
export type StoryInterest = "deep_lore" | "core_narrative" | "modern_peak";
export type Vibe = "dark" | "bright" | "classic";
export type Platform = "pc" | "android" | "ios" | "switch";

export interface QuizAnswers {
    playedSlugs: string[];
    storyInterest: StoryInterest;
    platforms: Platform[];
    vibe: Vibe;
}

/* ─── Platform detection from platformsAr strings ─── */
const PC_KEYWORDS = [
    "RetroArch على البيسي",
    "Dolphin على البيسي",
    "Cemu على البيسي",
    "Ryujinx على البيسي",
    "Lime3DS على البيسي",
];
const ANDROID_KEYWORDS = [
    "Lemuroid على الأندرويد",
    "Dolphin على الأندرويد",
    "Lime3DS على الأندرويد",
    "Sudachi / Suyu عالجوال الاندرويد",
];
const IOS_KEYWORDS = [
    "Delta على الايفون",
    "Folium على الايفون",
];
const SWITCH_KEYWORD = "جهاز نينتيندو الرسمي";

export function getGamePlatforms(game: Game): Platform[] {
    const plats: Set<Platform> = new Set();
    for (const p of game.platformsAr) {
        if (PC_KEYWORDS.some((k) => p.includes(k))) plats.add("pc");
        if (ANDROID_KEYWORDS.some((k) => p.includes(k))) plats.add("android");
        if (IOS_KEYWORDS.some((k) => p.includes(k))) plats.add("ios");
        if (p.includes(SWITCH_KEYWORD)) plats.add("switch");
    }
    return [...plats];
}

/* ─── Timeline branches (lore-accurate chronological order) ─── */
export const FOUNDATION: string[] = [
    "skyward-sword",
    "the-minish-cap",
    "four-swords",
    "ocarina-of-time",
];

export const CHILD_TIMELINE: string[] = [
    "majoras-mask",
    "twilight-princess",
    "four-swords-adventures",
];

export const ADULT_TIMELINE: string[] = [
    "wind-waker",
    "phantom-hourglass",
    "spirit-tracks",
];

export const DOWNFALL_TIMELINE: string[] = [
    "a-link-to-the-past",
    "links-awakening",
    "oracle-of-seasons",
    "oracle-of-ages",
    "a-link-between-worlds",
    "tri-force-heroes",
    "the-legend-of-zelda",
    "zelda-ii-the-adventure-of-link",
];

export const MODERN: string[] = [
    "breath-of-the-wild",
    "tears-of-the-kingdom",
    "links-awakening-hd",
    "echoes-of-wisdom",
];

/* ─── All games list for Q1 checkbox (display order = release date) ─── */
export function getAllGamesForCheckbox() {
    return Object.values(games).sort(
        (a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
    );
}

/* ─── Core decision algorithm ─── */
function firstAvailable(
    slugs: string[],
    played: Set<string>,
    compatibleSlugs: Set<string>,
    startFrom?: string
): Game | null {
    let started = !startFrom;
    for (const slug of slugs) {
        if (!started) {
            if (slug === startFrom) started = true;
            else continue;
        }
        if (!played.has(slug) && compatibleSlugs.has(slug)) {
            return games[slug] ?? null;
        }
    }
    return null;
}

export function recommend(answers: QuizAnswers): Game | null {
    const played = new Set(answers.playedSlugs);

    // Build set of slugs compatible with user's platforms
    const compatibleSlugs = new Set<string>();
    for (const [slug, game] of Object.entries(games)) {
        const gamePlats = getGamePlatforms(game);
        if (answers.platforms.some((p) => gamePlats.includes(p))) {
            compatibleSlugs.add(slug);
        }
    }

    // Q2: Modern Peak → skip Q4, go straight to Modern bucket
    if (answers.storyInterest === "modern_peak") {
        const result = firstAvailable(MODERN, played, compatibleSlugs);
        if (result) return result;
        // Fallback through all branches
        return fallbackSearch(played, compatibleSlugs);
    }

    // Q2: Deep Lore → start from Skyward Sword
    // Q2: Core Narrative → start from Ocarina of Time
    const foundationStart =
        answers.storyInterest === "deep_lore" ? "skyward-sword" : "ocarina-of-time";

    const foundationResult = firstAvailable(FOUNDATION, played, compatibleSlugs, foundationStart);
    if (foundationResult) return foundationResult;

    // Foundation exhausted → use Q4 vibe to pick a branch
    const branchMap: Record<Vibe, string[]> = {
        dark: CHILD_TIMELINE,
        bright: ADULT_TIMELINE,
        classic: DOWNFALL_TIMELINE,
    };

    const primaryBranch = branchMap[answers.vibe];
    const branchResult = firstAvailable(primaryBranch, played, compatibleSlugs);
    if (branchResult) return branchResult;

    // Primary branch exhausted → try other branches, then Modern
    return fallbackSearch(played, compatibleSlugs, answers.vibe);
}

function fallbackSearch(
    played: Set<string>,
    compatibleSlugs: Set<string>,
    excludeVibe?: Vibe
): Game | null {
    const allBranches: { vibe: Vibe; slugs: string[] }[] = [
        { vibe: "dark", slugs: CHILD_TIMELINE },
        { vibe: "bright", slugs: ADULT_TIMELINE },
        { vibe: "classic", slugs: DOWNFALL_TIMELINE },
    ];

    // Try non-primary branches
    for (const branch of allBranches) {
        if (branch.vibe === excludeVibe) continue;
        const result = firstAvailable(branch.slugs, played, compatibleSlugs);
        if (result) return result;
    }

    // Try foundation
    const foundResult = firstAvailable(FOUNDATION, played, compatibleSlugs);
    if (foundResult) return foundResult;

    // Try Modern
    const modernResult = firstAvailable(MODERN, played, compatibleSlugs);
    if (modernResult) return modernResult;

    // Nothing left
    return null;
}

/* ─── Check if Q4 is needed ─── */
export function needsVibeQuestion(answers: Pick<QuizAnswers, "playedSlugs" | "storyInterest" | "platforms">): boolean {
    if (answers.storyInterest === "modern_peak") return false;

    const played = new Set(answers.playedSlugs);
    const compatibleSlugs = new Set<string>();
    for (const [slug, game] of Object.entries(games)) {
        const gamePlats = getGamePlatforms(game);
        if (answers.platforms.some((p) => gamePlats.includes(p))) {
            compatibleSlugs.add(slug);
        }
    }

    const foundationStart =
        answers.storyInterest === "deep_lore" ? "skyward-sword" : "ocarina-of-time";
    const foundationResult = firstAvailable(FOUNDATION, played, compatibleSlugs, foundationStart);

    // If there's still a foundation game available, no need for vibe question
    return !foundationResult;
}
