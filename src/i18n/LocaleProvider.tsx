"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { localeToHtmlLang } from "@/i18n/localeHtml";
import { getMessage, type Locale } from "@/i18n/messages";

const STORAGE_KEY = "hommage-locale";

const VALID_LOCALES = new Set<Locale>(["ko", "en", "ja", "zh", "ru"]);

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "ko";
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v && VALID_LOCALES.has(v as Locale)) return v as Locale;
  } catch {
    /* ignore */
  }
  return "ko";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko");

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = localeToHtmlLang(next);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = localeToHtmlLang(locale);
    }
  }, [locale]);

  const t = useMemo(() => {
    return (path: string) => getMessage(locale, path);
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
