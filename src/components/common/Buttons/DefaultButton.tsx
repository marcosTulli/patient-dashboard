import type React from 'react';
import { Button, useTheme, useMediaQuery } from '@mui/material';

interface DefaultButton {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export const DefaultButton: React.FC<DefaultButton> = ({
  variant = 'contained',
  color = 'primary',
  label,
  icon,
  onClick,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Button
      variant={variant}
      color={color}
      startIcon={!isMobile && icon}
      onClick={onClick}
      size={isMobile ? 'small' : 'small'}
      sx={{
        borderRadius: 2,
        fontSize: '16px',
        textTransform: 'none',
        fontWeight: 'medium',
        minWidth: isMobile ? 'auto' : 160,
        py: 1,
        px: isMobile ? 2 : 2,
      }}
    >
      {isMobile ? icon : label}
    </Button>
  );
};
