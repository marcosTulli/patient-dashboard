import { Themes } from '@models';
import { themeStore } from '@/store/themeStore';
import { createTheme } from '@mui/material';
import { breakpoints, darkPalette, lightPalette, typography, components } from '@theme/index';

export const useAppTheme = () => {
  const store = themeStore();
  const isDarkTheme = store.selectedTheme === Themes.dark;

  const theme = createTheme({
    palette: isDarkTheme ? darkPalette : lightPalette,
    breakpoints,
    typography,
    components,
  });

  return {
    theme,
    isDarkTheme,
    toggleTheme: store.toggleTheme,
  };
};
