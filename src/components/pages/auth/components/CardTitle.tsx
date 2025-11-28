import { Typography } from '@mui/joy';
import React from 'react';
import { AccessTypes } from '../models';

interface CardTitleProps {
  mode: AccessTypes;
  tabIdPrefix: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ mode, tabIdPrefix }) => {
  return (
    <Typography id={`${tabIdPrefix}-${mode}`} level="h4" textAlign="center" mb={2} component="h1">
      {mode === AccessTypes.login ? 'Login' : 'Create Account'}
    </Typography>
  );
};

export default CardTitle;
