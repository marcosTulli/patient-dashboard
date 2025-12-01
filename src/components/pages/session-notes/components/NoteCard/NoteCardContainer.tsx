'use client';
import { Card } from '@mui/material';
import React, { type PropsWithChildren } from 'react';

interface NoteCardContainerProps extends PropsWithChildren {
  displayFullNotes: boolean;
  onClick: (e: React.MouseEvent) => void;
}
export const NoteCardContainer: React.FC<NoteCardContainerProps> = ({
  displayFullNotes,
  onClick,
  children,
}) => {
  return (
    <Card
      elevation={displayFullNotes ? 3 : 2}
      onClick={onClick}
      sx={{
        borderRadious: displayFullNotes ? 3 : 2,
        bgColor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        transition: 'all 0.2s ease-in-out',
        cursor: displayFullNotes ? 'default' : 'pointer',
        '&:hover': displayFullNotes
          ? {}
          : {
              elevation: 4,
              transform: 'translateY(-2px)',
              boxShadow: 3,
            },
      }}
    >
      {children}
    </Card>
  );
};
