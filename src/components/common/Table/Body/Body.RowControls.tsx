'use client';

import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';

interface RowControlsProps<T> {
  item: T;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

export function RowControls<T>({ item, onEdit, onDelete }: RowControlsProps<T>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!onEdit && !onDelete) return null;

  return (
    <>
      <IconButton size="small" onClick={handleClick}>
        <MoreVertical size={16} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {onEdit && (
          <MenuItem
            onClick={() => {
              onEdit(item);
              handleClose();
            }}
          >
            <ListItemIcon>
              <Edit size={16} />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
        )}
        {onDelete && (
          <MenuItem
            onClick={() => {
              onDelete(item);
              handleClose();
            }}
            sx={{ color: 'error.main' }}
          >
            <ListItemIcon sx={{ color: 'error.main' }}>
              <Trash2 size={16} />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
