'use client';

import React from 'react';
import { Dropdown, MenuButton, Menu, MenuItem, IconButton } from '@mui/joy';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';

interface RowControlsProps<T> {
  item: T;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

export function RowControls<T>({
  item,
  onEdit,
  onDelete,
}: RowControlsProps<T>) {
  if (!onEdit && !onDelete) return null;

  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'plain', size: 'sm' } }}
      >
        <MoreVertical size={16} />
      </MenuButton>
      <Menu placement="right-start">
        {onEdit && (
          <MenuItem onClick={() => onEdit(item)}>
            <Edit size={16} />
            Edit
          </MenuItem>
        )}
        {onDelete && (
          <MenuItem onClick={() => onDelete(item)} color="danger">
            <Trash2 size={16} />
            Delete
          </MenuItem>
        )}
      </Menu>
    </Dropdown>
  );
}
