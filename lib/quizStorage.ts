import type { StoryInterest, Platform } from "./quizEngine";

const QUIZ_STATE_KEY = "hyrule-oasis.quiz-v2";

export interface QuizState {
  playedSlugs: string[];
  storyInterest: StoryInterest | "";
  platforms: Platform[];
  resultSlug: string | null;
}

export const EMPTY_STATE: QuizState = {
  playedSlugs: [],
  storyInterest: "",
  platforms: [],
  resultSlug: null,
};

export function loadQuizState(): QuizState {
  if (typeof window === "undefined") return { ...EMPTY_STATE };
  try {
    const raw = window.localStorage.getItem(QUIZ_STATE_KEY);
    if (!raw) return { ...EMPTY_STATE };
    return { ...EMPTY_STATE, ...JSON.parse(raw) };
  } catch {
    return { ...EMPTY_STATE };
  }
}

export function saveQuizState(state: QuizState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify(state));
}

export function clearQuizState() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(QUIZ_STATE_KEY);
}
