'use client';
import React from 'react';
import { MenuItem, Typography, ListItemIcon } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppTheme } from '@/hooks/useApppTheme';

const ThemeSwitch: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useAppTheme();
  const Icon = isDarkTheme ? LightModeIcon : DarkModeIcon;
  const label = isDarkTheme ? 'Light' : 'Dark';

  return (
    <MenuItem onClick={toggleTheme}>
      <ListItemIcon>
        <Icon fontSize="small" />
      </ListItemIcon>
      <Typography>{label}</Typography>
    </MenuItem>
  );
};

export default ThemeSwitch;
