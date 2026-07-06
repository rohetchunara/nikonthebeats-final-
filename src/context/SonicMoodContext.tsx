import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { MoodTheme, SonicMood } from '../types';
import { getMoodTheme } from '../types';

interface SonicMoodContextValue {
  selectedMood: SonicMood | null;
  setSelectedMood: (mood: SonicMood | null) => void;
  selectMood: (mood: SonicMood) => void;
  moodTheme: MoodTheme;
  ambientGradient: string;
  ambientPulse: string;
}

const SonicMoodContext = createContext<SonicMoodContextValue | null>(null);

function applyThemeVars(theme: MoodTheme) {
  const root = document.documentElement;
  root.style.setProperty('--mood-accent', theme.accent);
  root.style.setProperty('--mood-accent-soft', theme.accentSoft);
  root.style.setProperty('--mood-border', theme.border);
  root.style.setProperty('--mood-glow', theme.glow);
  root.style.setProperty('--mood-pulse', theme.pulse);
}

export function SonicMoodProvider({ children }: { children: ReactNode }) {
  const [selectedMood, setSelectedMood] = useState<SonicMood | null>(null);

  const selectMood = (mood: SonicMood) => {
    setSelectedMood((prev) => (prev === mood ? null : mood));
  };

  const moodTheme = getMoodTheme(selectedMood);

  useEffect(() => {
    applyThemeVars(moodTheme);
  }, [moodTheme]);

  const value = useMemo(
    () => ({
      selectedMood,
      setSelectedMood,
      selectMood,
      moodTheme,
      ambientGradient: moodTheme.gradient,
      ambientPulse: moodTheme.pulse,
    }),
    [selectedMood, moodTheme]
  );

  return (
    <SonicMoodContext.Provider value={value}>{children}</SonicMoodContext.Provider>
  );
}

export function useSonicMood() {
  const context = useContext(SonicMoodContext);
  if (!context) {
    throw new Error('useSonicMood must be used within SonicMoodProvider');
  }
  return context;
}
