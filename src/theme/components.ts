import type { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: theme.shape.borderRadius,
      }),
      containedPrimary: ({ theme }) => ({
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      }),
      containedSecondary: ({ theme }) => ({
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
        },
      }),
      containedSuccess: ({ theme }) => ({
        color: theme.palette.success.contrastText,
        backgroundColor: theme.palette.success.main,
        '&:hover': {
          backgroundColor: theme.palette.success.dark,
        },
      }),
      containedWarning: ({ theme }) => ({
        color: theme.palette.warning.contrastText,
        backgroundColor: theme.palette.warning.main,
        '&:hover': {
          backgroundColor: theme.palette.warning.dark,
        },
      }),
      containedError: ({ theme }) => ({
        color: theme.palette.error.contrastText,
        backgroundColor: theme.palette.error.main,
        '&:hover': {
          backgroundColor: theme.palette.error.dark,
        },
      }),
      outlinedPrimary: ({ theme }) => ({
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        '&:hover': {
          borderColor: theme.palette.primary.dark,
          backgroundColor: theme.palette.action.hover,
        },
      }),
      outlinedSecondary: ({ theme }) => ({
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        '&:hover': {
          borderColor: theme.palette.secondary.dark,
          backgroundColor: theme.palette.action.hover,
        },
      }),
      textPrimary: ({ theme }) => ({
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      }),
      textSecondary: ({ theme }) => ({
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      }),
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: theme.typography.fontFamily,
      }),
    },
  },
};
