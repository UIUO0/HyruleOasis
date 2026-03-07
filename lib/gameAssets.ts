export type GameAssetKind = "cover" | "hero" | "shot";

export function gameAssetPath(slug: string, kind: GameAssetKind, index?: number, ext: string = "webp") {
  if (kind === "shot") {
    const safeIndex = Math.max(1, Number.isFinite(index ?? 1) ? (index as number) : 1);
    const padded = String(safeIndex).padStart(2, "0");
    return `/images/games/${slug}/shots/${padded}.${ext}`;
  }

  return `/images/games/${slug}/${kind}.${ext}`;
}

export const GAME_SLUG_EXAMPLES = {
  breathOfTheWild: "breath-of-the-wild",
  tearsOfTheKingdom: "tears-of-the-kingdom",
  ocarinaOfTime: "ocarina-of-time",
  windWaker: "wind-waker",
  twilightPrincess: "twilight-princess"
} as const;
