import { es, type Translations } from "./es";
import { en } from "./en";
import { pt } from "./pt";

export const translations: Record<string, Translations> = { es, en, pt };
export type { Translations } from "./es";
export type Language = "es" | "en" | "pt";