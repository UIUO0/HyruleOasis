export const QUIZ_STORAGE_KEY = "hyrule-oasis.quiz.preferred-style";
export const QUIZ_RESULT_KEY = "hyrule-oasis.quiz.recommendation";

export function loadPreferredStyle() {
  if (typeof window === "undefined") {
    return "";
  }
  return window.localStorage.getItem(QUIZ_STORAGE_KEY) ?? "";
}

export function savePreferredStyle(value: string) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(QUIZ_STORAGE_KEY, value);
}

export function loadRecommendation() {
  if (typeof window === "undefined") {
    return "";
  }
  return window.localStorage.getItem(QUIZ_RESULT_KEY) ?? "";
}

export function saveRecommendation(value: string) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(QUIZ_RESULT_KEY, value);
}
