import 'server-only';

const dictionaries = {
    en: () => import("@/src/dictionaries/en.json").then((module) => module.default),
    ua: () => import("@/src/dictionaries/ua.json").then((module) => module.default)
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale => locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
