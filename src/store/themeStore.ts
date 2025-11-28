import { Themes } from '@models';
import { create } from 'zustand';

interface ThemeState {
  selectedTheme: Themes;
  toggleTheme: () => void;
}

const getBrowserTheme = (): Themes => {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return Themes.dark;
  }
  return Themes.light;
};

const getInitialTheme = (): Themes => {
  if (typeof window === 'undefined') return Themes.dark;

  const savedTheme = localStorage.getItem('selectedTheme') as Themes | null;
  if (savedTheme === Themes.dark || savedTheme === Themes.light) {
    return savedTheme;
  }
  return getBrowserTheme();
};

export const themeStore = create<ThemeState>((set) => ({
  selectedTheme: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.selectedTheme === Themes.light ? Themes.dark : Themes.light;
      localStorage.setItem('selectedTheme', newTheme);
      return { selectedTheme: newTheme };
    }),
}));
