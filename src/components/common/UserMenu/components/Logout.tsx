import React from 'react';
import { MenuItem, Typography, ListItemIcon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUserMenu } from '../hooks/useUserMenu';

const Logout: React.FC = () => {
  const { handleLogout } = useUserMenu();

  return (
    <MenuItem onClick={handleLogout}>
      <ListItemIcon>
        <LogoutIcon fontSize="small" />
      </ListItemIcon>
      <Typography>Logout</Typography>
    </MenuItem>
  );
};

export default Logout;
