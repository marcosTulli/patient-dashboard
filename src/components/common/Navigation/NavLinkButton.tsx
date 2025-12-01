'use client';

import React from 'react';
import { Button, Typography } from '@mui/material';
import { LabelSmall } from '@/components/common/Text/components';

interface NavLinkButtonProps {
  variant?: 'navbar' | 'sidebar';
  label: string;
  Icon: React.ComponentType;
  isPath: boolean;
  handleClick: () => void;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({
  variant = 'navbar',
  label,
  Icon,
  isPath,
  handleClick,
}) => {
  const isSidebar = variant === 'sidebar';

  return (
    <Button
      type="button"
      variant="text"
      onClick={handleClick}
      sx={{
        color: isPath ? 'primary.contrastText' : 'text.secondary',
        bgcolor: isPath ? 'primary.main' : 'transparent',
        justifyContent: 'flex-start',
        width: isSidebar ? '100%' : 'auto',
        gap: 1,
        borderRadius: 1,
        '&:hover': {
          bgcolor: isPath ? 'primary.dark' : 'action.hover',
        },
      }}
    >
      <Icon />
      {isSidebar ? (
        <LabelSmall>{label}</LabelSmall>
      ) : (
        <Typography variant="body2">{label}</Typography>
      )}
    </Button>
  );
};

export default NavLinkButton;
