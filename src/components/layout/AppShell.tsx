"use client";

import { useState } from "react";
import MobileHeader from "./MobileHeader";
import Aside from "./Aside";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <MobileHeader
        menuOpen={mobileMenuOpen}
        onMenuToggle={() => setMobileMenuOpen((o) => !o)}
      />
      <Aside />
      {children}
    </>
  );
}
