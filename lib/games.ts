export type Game = {
  slug: string;
  displayTitle: string;
  subtitleAr: string;
  synopsisAr: string;
  assetExt: "webp" | "png" | "jpg" | "jpeg" | "svg";
  shotExt?: "webp" | "png" | "jpg" | "jpeg" | "svg";
};

export const games: Record<string, Game> = {
  "skyward-sword": {
    slug: "skyward-sword",
    displayTitle: "The Legend of Zelda/ Skyward Sword",
    subtitleAr: "البداية الأسطورية لأسطورة السيف والسماء.",
    synopsisAr:
      "مغامرة تبدأ فوق الغيوم وتنزل إلى السطح. تركّز على الألغاز، الدنجنز المصممة بعناية، وتطور الرابط بين البطل ومصيره.",
    assetExt: "webp",
    shotExt: "svg"
  }
};

export function getGame(slug: string) {
  return games[slug] ?? null;
}
