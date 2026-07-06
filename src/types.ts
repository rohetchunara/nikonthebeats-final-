export type PageView = 'home' | 'services' | 'briefing';

export type SonicMood = 'dark-void' | 'peaceful-trust' | 'form' | 'structure';

export interface MoodOption {
  id: SonicMood;
  index: string;
  label: string;
  briefingLabel: string;
  description: string;
}

export interface MoodTheme {
  gradient: string;
  pulse: string;
  accent: string;
  accentSoft: string;
  border: string;
  glow: string;
  label: string;
}

export const MOOD_OPTIONS: MoodOption[] = [
  {
    id: 'dark-void',
    index: '01',
    label: 'DARK & VOID',
    briefingLabel: 'Dark & Void',
    description: 'Obsidian depth with deep crimson resonance',
  },
  {
    id: 'peaceful-trust',
    index: '02',
    label: 'PEACEFUL & TRUST',
    briefingLabel: 'Peaceful & Trust',
    description: 'Rich darkness with emerald calm',
  },
  {
    id: 'form',
    index: '03',
    label: 'FORM',
    briefingLabel: 'Form',
    description: 'Elegant violet architecture',
  },
  {
    id: 'structure',
    index: '04',
    label: 'RESONANCE',
    briefingLabel: 'Resonance',
    description: 'Warm bronze harmonic foundation',
  },
];

export const MOOD_THEMES: Record<SonicMood, MoodTheme> = {
  'dark-void': {
    gradient:
      'radial-gradient(ellipse 120% 80% at 50% 100%, rgb(40 8 12) 0%, rgb(8 8 10) 45%, rgb(0 0 0) 100%)',
    pulse: 'radial-gradient(circle at 50% 60%, rgba(127, 29, 29, 0.35) 0%, transparent 65%)',
    accent: '#e8d5d5',
    accentSoft: 'rgba(127, 29, 29, 0.45)',
    border: 'rgba(127, 29, 29, 0.25)',
    glow: 'rgba(185, 28, 28, 0.12)',
    label: 'Dark / Void',
  },
  'peaceful-trust': {
    gradient:
      'radial-gradient(ellipse 120% 80% at 50% 100%, rgb(8 32 24) 0%, rgb(6 14 12) 45%, rgb(0 0 0) 100%)',
    pulse: 'radial-gradient(circle at 50% 60%, rgba(16, 80, 60, 0.32) 0%, transparent 65%)',
    accent: '#d4ebe3',
    accentSoft: 'rgba(16, 80, 60, 0.4)',
    border: 'rgba(16, 80, 60, 0.28)',
    glow: 'rgba(52, 211, 153, 0.1)',
    label: 'Peaceful / Trust',
  },
  form: {
    gradient:
      'radial-gradient(ellipse 120% 80% at 50% 100%, rgb(36 20 56) 0%, rgb(14 8 24) 45%, rgb(0 0 0) 100%)',
    pulse: 'radial-gradient(circle at 50% 60%, rgba(109, 40, 217, 0.28) 0%, transparent 65%)',
    accent: '#e4dff0',
    accentSoft: 'rgba(109, 40, 217, 0.38)',
    border: 'rgba(139, 92, 246, 0.28)',
    glow: 'rgba(139, 92, 246, 0.14)',
    label: 'Form',
  },
  structure: {
    gradient:
      'radial-gradient(ellipse 120% 80% at 50% 100%, rgb(28 20 14) 0%, rgb(10 8 8) 45%, rgb(0 0 0) 100%)',
    pulse: 'radial-gradient(circle at 50% 60%, rgba(120, 80, 40, 0.22) 0%, transparent 65%)',
    accent: '#ebe4d8',
    accentSoft: 'rgba(120, 80, 40, 0.35)',
    border: 'rgba(161, 98, 7, 0.22)',
    glow: 'rgba(180, 130, 70, 0.1)',
    label: 'Resonance',
  },
};

export const DEFAULT_THEME: MoodTheme = {
  gradient:
    'radial-gradient(ellipse 120% 80% at 50% 100%, rgb(18 18 20) 0%, rgb(6 6 8) 50%, rgb(0 0 0) 100%)',
  pulse: 'radial-gradient(circle at 50% 60%, rgba(255, 255, 255, 0.06) 0%, transparent 65%)',
  accent: '#f5f5f5',
  accentSoft: 'rgba(255, 255, 255, 0.12)',
  border: 'rgba(255, 255, 255, 0.08)',
  glow: 'rgba(255, 255, 255, 0.04)',
  label: 'Studio Default',
};

/** @deprecated Use MOOD_THEMES[id].gradient */
export const MOOD_GRADIENTS: Record<SonicMood, string> = Object.fromEntries(
  Object.entries(MOOD_THEMES).map(([k, v]) => [k, v.gradient])
) as Record<SonicMood, string>;

export const DEFAULT_GRADIENT = DEFAULT_THEME.gradient;

export function getMoodTheme(mood: SonicMood | null): MoodTheme {
  return mood ? MOOD_THEMES[mood] : DEFAULT_THEME;
}
