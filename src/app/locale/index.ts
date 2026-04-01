import en from "./en.json";
import ja from "./ja.json";

const localizations = {
  en,
  ja,
} satisfies Record<string, typeof en>;

export type Locale = keyof typeof localizations;
export type Localization = typeof en;

export const getLocalization = (locale: Locale): Localization =>
  localizations[locale];
