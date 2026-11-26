// src/components/onboarding/welcomeButtonTokens.ts
//
// The onboarding CTA's Liquid Glass colours ("Get started" / "Start using
// Natively", variant="lavender"), per theme. Its own module so a surface that
// wants the same button (Settings › Process Disguise's selected tile) reads
// them without importing welcomeShared's video and card assets.

export const WELCOME_BUTTON_TOKENS = {
  light: {
    '--lg-lav-bg': 'rgba(16,185,129,0.22)',
    '--lg-lav-hover': 'rgba(16,185,129,0.34)',
    '--lg-lav-fg': '#064E3B',
    '--lg-rim-2': 'rgba(16,185,129,0.34)',
    '--lg-rim-3': 'rgba(16,185,129,0.16)',
    '--lg-lens-rim-soft': 'rgba(16,185,129,0.28)',
    '--lg-lav-glow': 'rgba(16,185,129,0.40)',
    '--lg-lav-under': 'rgba(6,78,59,0.14)',
    '--lg-lav-drop': 'rgba(6,78,59,0.10)',
  },
  dark: {
    '--lg-lav-bg': '#10B981',
    '--lg-lav-hover': '#059669',
    '--lg-lav-fg': '#FFFFFF',
    '--lg-lav-rim': 'rgba(255,255,255,0.30)',
    '--lg-lav-glow': 'rgba(16,185,129,0.55)',
  },
} as const;
