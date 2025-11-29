import { Themes } from '@models';
import { create } from 'zustand';

interface ThemeState {
  selectedTheme: Themes;
  isHydrated: boolean;
  toggleTheme: () => void;
  hydrate: () => void;
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

const getStoredTheme = (): Themes => {
  if (typeof window === 'undefined') return Themes.dark;

  const savedTheme = localStorage.getItem('selectedTheme') as Themes | null;
  if (savedTheme === Themes.dark || savedTheme === Themes.light) {
    return savedTheme;
  }

  return getBrowserTheme();
};

const DEFAULT_THEME = Themes.dark;

export const themeStore = create<ThemeState>((set) => ({
  selectedTheme: DEFAULT_THEME,
  isHydrated: false,
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.selectedTheme === Themes.light ? Themes.dark : Themes.light;
      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedTheme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === Themes.dark);
      }
      return { selectedTheme: newTheme };
    }),
  hydrate: () => {
    const theme = getStoredTheme();
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.classList.toggle('dark', theme === Themes.dark);
    }
    set({ selectedTheme: theme, isHydrated: true });
  },
}));
