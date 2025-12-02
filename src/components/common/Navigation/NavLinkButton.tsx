'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { LabelSmall } from '@/components/common/Text/components';
import Link from 'next/link';
import { useSideBar } from '@/hooks';
import { usePathname } from 'next/navigation';

interface NavLinkButtonProps {
  variant?: 'navbar' | 'sidebar';
  label: string;
  Icon: React.ComponentType;
  path: string;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({ variant = 'navbar', label, Icon, path }) => {
  const isSidebar = variant === 'sidebar';
  const { isSideBarOpen, toggleSideBar } = useSideBar();
  const activePath = usePathname();
  const isActivePath = activePath === path;

  const handleLinkClick = React.useCallback(() => {
    if (isSideBarOpen) {
      toggleSideBar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSideBarOpen]);

  return (
    <Link href={path} onClick={handleLinkClick} style={{ textDecoration: 'none', outline: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 1,
          color: 'text.secondary',
          backgroundColor: isActivePath ? 'primary.main' : 'transparent',
          justifyContent: 'flex-start',
          width: isSidebar ? '100%' : 'auto',
          gap: 2,
          borderRadius: 1,
        }}
      >
        <Icon />
        {isSidebar ? (
          <LabelSmall>{label}</LabelSmall>
        ) : (
          <Typography variant="body2">{label}</Typography>
        )}
      </Box>
    </Link>
  );
};

export default NavLinkButton;
