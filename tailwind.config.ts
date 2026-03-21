// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pantone Greige / Neutral (globals.css 변수와 동기화)
        "bg-main": "var(--bg-main)",
        "bg-surface": "var(--bg-surface)",
        "bg-page": "var(--bg-page)",
        "bg-card": "var(--bg-card)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "border-subtle": "var(--border-subtle)",
        "border-page": "var(--border-page)",
        primary: {
          DEFAULT: "var(--text-primary)",
          light: "var(--text-secondary)",
          dark: "var(--text-primary)",
        },
        bg: {
          base: "var(--bg-main)",
          sub: "var(--bg-surface)",
        },
        text: {
          main: "var(--text-primary)",
          sub: "var(--text-secondary)",
          muted: "var(--text-secondary)",
        },
      },
      boxShadow: {
        card: "0 4px 20px rgba(44, 43, 42, 0.04)",
      },
      fontFamily: {
        // 프리텐다드가 없다면 시스템 폰트라도 깔끔하게 떨어지도록 설정
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        serif: ['Times New Roman', 'serif'], // 영문 포인트용
      },
      // [핵심] 글자 간격을 좁혀야(Tight) 세련돼 보임
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        normal: '-0.01em',
      },
    },
  },
  plugins: [],
};
export default config;