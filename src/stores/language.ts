import { create } from "zustand";
import { translations, type Translations, type Language } from "@/data/translations";

interface LanguageStore {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "es",
  t: translations.es,
  setLanguage: (lang: Language) =>
    set({ language: lang, t: translations[lang] }),
}));