/** AxaoHub design reminder: tool-first interface, cosmic-blue actions, concise copy. */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";
import de from "@/locales/de.json";
import es from "@/locales/es.json";

export type Locale = "en" | "ar" | "de" | "es";
export const localeMeta: Record<Locale, { label: string; flag: string; dir: "ltr" | "rtl" }> = {
  en: { label: "EN", flag: "🇺🇸", dir: "ltr" },
  ar: { label: "AR", flag: "🇸🇦", dir: "rtl" },
  de: { label: "DE", flag: "🇩🇪", dir: "ltr" },
  es: { label: "ES", flag: "🇪🇸", dir: "ltr" },
};
const dictionaries: Record<Locale, Record<string, string>> = { en, ar, de, es };
type I18nState = { locale: Locale; setLocale: (locale: Locale) => void; t: (key: string) => string; dir: "ltr" | "rtl" };
const I18nContext = createContext<I18nState | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const initial = (new URLSearchParams(window.location.search).get("lang") as Locale) || "en";
  const [locale, setLocaleState] = useState<Locale>(Object.keys(localeMeta).includes(initial) ? initial : "en");
  const setLocale = (next: Locale) => {
    setLocaleState(next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url);
  };
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = localeMeta[locale].dir;
  }, [locale]);
  const value = useMemo(() => ({ locale, setLocale, dir: localeMeta[locale].dir, t: (key: string) => dictionaries[locale][key] || dictionaries.en[key] || key }), [locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
