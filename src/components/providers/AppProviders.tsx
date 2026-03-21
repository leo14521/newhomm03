"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/i18n/LocaleProvider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SessionProvider refetchOnWindowFocus>
      <LocaleProvider>{children}</LocaleProvider>
    </SessionProvider>
  );
}
