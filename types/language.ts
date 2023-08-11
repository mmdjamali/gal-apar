export type LanguageType = "fa" | "en" | "tr";

export type WithLanguageType = {
  language: LanguageType;
};

export interface PropsWithLanguage<T> {
  params: T & WithLanguageType;
}
