import type { PaletteOptions } from '@mui/material/styles';

const rawColors = {
  // Base colors - matte/warm tones
  white: '#FAF8F5',
  black: '#1C1B22',
  gray: '#8E8A9D',

  // Primary - Purple tone
  primaryLightMain: '#5E438F',
  primaryLightLight: '#7B5FAD',
  primaryLightDark: '#4A3571',
  primaryDarkMain: '#7B5FAD',

  // Secondary - Soft pink/lavender
  secondaryLightMain: '#DCB3D5',
  secondaryLightLight: '#E8CDE3',
  secondaryLightDark: '#C499BE',
  secondaryDarkLight: '#EFE0EC',

  // Success - Muted green
  successLightMain: '#10B981',
  successLightLight: '#34D399',
  successLightDark: '#059669',
  successDarkLight: '#6EE7B7',

  // Warning - Amber/Orange
  warningLightMain: '#F59E0B',
  warningLightLight: '#FBB040',
  warningLightDark: '#D97706',
  warningDarkLight: '#FED7AA',

  // Error - Modern red
  errorLightMain: '#EF4444',
  errorLightLight: '#F87171',
  errorLightDark: '#DC2626',
  errorDarkLight: '#FCA5A5',

  // Neutral palette - warm/matte tones
  neutralWhite: '#FAF8F5',
  neutralOverlay: '#F5F3F0',
  neutralBorder: '#DDD9D4',
  neutralDisable: '#C4C0BB',
  neutralBlocked: '#EDEAE6',
  neutralContrast: '#1C1B22',
  neutralBlack: '#2A2833',

  // Text colors - softer tones
  textHeader: '#1C1B22',
  textBody: '#3D3A47',
  textBodyRegular: '#524E5C',
  textGrey: '#6E6A78',
  textContrast: '#FAF8F5',
  textLinkLight: '#5E438F',
  textLinkDark: '#9B7DC9',

  // Surface colors - warm/beige undertones
  surface0: '#FAF8F5',
  surface1: '#F5F3F0',
  surface2: '#F0EDE9',
  surface3: '#EBE8E3',

  // Dark mode surfaces - soft dark with purple undertone
  darkPaper: '#252432',
  darkDivider: '#3D3A4A',
  darkSelected: '#4A475A',
};

const semanticColors = {
  base: {
    white: rawColors.white,
    black: rawColors.black,
    gray: rawColors.gray,
  },
  primary: {
    light: {
      main: rawColors.primaryLightMain,
      light: rawColors.primaryLightLight,
      dark: rawColors.primaryLightDark,
      contrastText: rawColors.white,
    },
    dark: {
      main: rawColors.primaryDarkMain,
      light: rawColors.primaryLightLight,
      dark: rawColors.primaryLightDark,
      contrastText: rawColors.black,
    },
  },
  secondary: {
    light: {
      main: rawColors.secondaryLightMain,
      light: rawColors.secondaryLightLight,
      dark: rawColors.secondaryLightDark,
      contrastText: rawColors.white, // Changed to black for better contrast with golden color
    },
    dark: {
      main: rawColors.secondaryLightLight,
      light: rawColors.secondaryDarkLight,
      dark: rawColors.secondaryLightDark,
      contrastText: rawColors.black, // Changed to black for better contrast
    },
  },
  success: {
    light: {
      main: rawColors.successLightMain,
      light: rawColors.successLightLight,
      dark: rawColors.successLightDark,
      contrastText: rawColors.neutralWhite,
    },
    dark: {
      main: rawColors.successLightLight,
      light: rawColors.successDarkLight,
      dark: rawColors.successLightDark,
      contrastText: rawColors.neutralWhite,
    },
  },
  warning: {
    light: {
      main: rawColors.warningLightMain,
      light: rawColors.warningLightLight,
      dark: rawColors.warningLightDark,
      contrastText: rawColors.black,
    },
    dark: {
      main: rawColors.warningLightLight,
      light: rawColors.warningDarkLight,
      dark: rawColors.warningLightDark,
      contrastText: rawColors.neutralContrast,
    },
  },
  error: {
    light: {
      main: rawColors.errorLightMain,
      light: rawColors.errorLightLight,
      dark: rawColors.errorLightDark,
      contrastText: rawColors.neutralWhite,
    },
    dark: {
      main: rawColors.errorLightMain,
      light: rawColors.errorLightLight,
      dark: rawColors.errorLightDark,
      contrastText: rawColors.black,
    },
  },
  background: {
    default: {
      light: rawColors.surface0,
      dark: rawColors.neutralContrast,
    },
    paper: {
      light: rawColors.surface1,
      dark: rawColors.darkPaper,
    },
  },
  text: {
    primary: {
      light: rawColors.textHeader,
      dark: rawColors.textContrast,
    },
    secondary: {
      light: rawColors.textBody,
      dark: rawColors.neutralBorder,
    },
    disabled: {
      light: rawColors.neutralDisable,
      dark: rawColors.textGrey,
    },
    grey: rawColors.textGrey,
    link: {
      light: rawColors.textLinkLight,
      dark: rawColors.textLinkDark,
    },
  },
  divider: {
    light: rawColors.neutralBorder,
    dark: rawColors.darkDivider,
  },
  action: {
    active: {
      light: rawColors.textBody,
      dark: rawColors.neutralBorder,
    },
    hover: {
      light: rawColors.surface2,
      dark: rawColors.darkPaper,
    },
    selected: {
      light: rawColors.surface3,
      dark: rawColors.darkSelected,
    },
    disabled: {
      light: rawColors.neutralDisable,
      dark: rawColors.textGrey,
    },
    disabledBackground: {
      light: rawColors.neutralBlocked,
      dark: rawColors.neutralBlack,
    },
  },
  neutral: {
    overlay: rawColors.neutralOverlay,
    border: rawColors.neutralBorder,
    blocked: rawColors.neutralBlocked,
    black: rawColors.neutralBlack,
  },
};

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: semanticColors.primary.light,
  secondary: semanticColors.secondary.light,
  success: semanticColors.success.light,
  warning: semanticColors.warning.light,
  error: semanticColors.error.light,
  background: {
    default: semanticColors.background.default.light,
    paper: semanticColors.background.paper.light,
  },
  text: {
    primary: semanticColors.text.primary.light,
    secondary: semanticColors.text.secondary.light,
    disabled: semanticColors.text.disabled.light,
    link: semanticColors.text.link.light,
  },
  divider: semanticColors.divider.light,
  action: {
    active: semanticColors.action.active.light,
    hover: semanticColors.action.hover.light,
    selected: semanticColors.action.selected.light,
    disabled: semanticColors.action.disabled.light,
    disabledBackground: semanticColors.action.disabledBackground.light,
  },
};

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: semanticColors.primary.dark,
  secondary: semanticColors.secondary.dark,
  success: semanticColors.success.dark,
  warning: semanticColors.warning.dark,
  error: semanticColors.error.dark,
  background: {
    default: semanticColors.background.default.dark,
    paper: semanticColors.background.paper.dark,
  },
  text: {
    primary: semanticColors.text.primary.dark,
    secondary: semanticColors.text.secondary.dark,
    disabled: semanticColors.text.disabled.dark,
    link: semanticColors.text.link.dark,
  },
  divider: semanticColors.divider.dark,
  action: {
    active: semanticColors.action.active.dark,
    hover: semanticColors.action.hover.dark,
    selected: semanticColors.action.selected.dark,
    disabled: semanticColors.action.disabled.dark,
    disabledBackground: semanticColors.action.disabledBackground.dark,
  },
};
