import { games, type Game } from "./games";

/* ─── Types ─── */
export type StoryInterest = "deep_lore" | "core_narrative" | "modern_peak";
export type Platform = "pc" | "android" | "ios" | "switch";

export interface QuizAnswers {
    playedSlugs: string[];
    storyInterest: StoryInterest;
    platforms: Platform[];
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
    "ocarina-of-time-3d",
];

export const CHILD_TIMELINE: string[] = [
    "majoras-mask",
    "twilight-princess-hd",
    "four-swords-adventures",
];

export const ADULT_TIMELINE: string[] = [
    "wind-waker",
    "phantom-hourglass",
    "spirit-tracks",
];

export const DOWNFALL_TIMELINE: string[] = [
    "a-link-to-the-past",

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

export const LEGEND_STORY_21: string[] = [
    "skyward-sword",
    "the-minish-cap",
    "four-swords",
    "ocarina-of-time-3d",
    "majoras-mask",
    "twilight-princess-hd",
    "four-swords-adventures",
    "wind-waker",
    "phantom-hourglass",
    "spirit-tracks",
    "a-link-to-the-past",
    "oracle-of-seasons",
    "oracle-of-ages",
    "links-awakening-hd",
    "a-link-between-worlds",
    "tri-force-heroes",
    "the-legend-of-zelda",
    "zelda-ii-the-adventure-of-link",
    "breath-of-the-wild",
    "tears-of-the-kingdom",
    "echoes-of-wisdom",
];

export const TIMELINE_IMPORTANT_PATH: string[] = [
    "skyward-sword",
    "the-minish-cap",
    "ocarina-of-time-3d",
    "majoras-mask",
    "twilight-princess-hd",
    "wind-waker",
    "phantom-hourglass",
    "spirit-tracks",
    "a-link-to-the-past",
    "oracle-of-seasons",
    "links-awakening-hd",
    "a-link-between-worlds",
    "the-legend-of-zelda",
    "breath-of-the-wild",
    "tears-of-the-kingdom",
    "echoes-of-wisdom",
];

export const MODERN_HEAVY_PATH: string[] = [
    "breath-of-the-wild",
    "tears-of-the-kingdom",
    "echoes-of-wisdom",
];

/* ─── All games list for Q1 checkbox (display order = release date) ─── */
export function getAllGamesForCheckbox() {
    const allowed = new Set(LEGEND_STORY_21);
    return Object.values(games)
        .filter((g) => allowed.has(g.slug))
        .sort(
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
    const allowed = new Set(LEGEND_STORY_21);
    const compatibleSlugs = new Set<string>();

    for (const [slug, game] of Object.entries(games)) {
        if (!allowed.has(slug)) continue;
        const gamePlats = getGamePlatforms(game);
        if (answers.platforms.some((p) => gamePlats.includes(p))) {
            compatibleSlugs.add(slug);
        }
    }

    if (answers.storyInterest === "modern_peak") {
        return firstAvailable(MODERN_HEAVY_PATH, played, compatibleSlugs);
    }

    const path =
        answers.storyInterest === "deep_lore"
            ? LEGEND_STORY_21
            : TIMELINE_IMPORTANT_PATH;

    return firstAvailable(path, played, compatibleSlugs);
}
