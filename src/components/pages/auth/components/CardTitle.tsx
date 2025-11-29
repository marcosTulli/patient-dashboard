import { Typography } from '@mui/material';
import React from 'react';
import { AccessTypes } from '../models';

interface CardTitleProps {
  mode: AccessTypes;
  tabIdPrefix: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ mode, tabIdPrefix }) => {
  return (
    <Typography id={`${tabIdPrefix}-${mode}`} variant="h5" textAlign="center" mb={2} component="h1">
      {mode === AccessTypes.login ? 'Login' : 'Create Account'}
    </Typography>
  );
};

export default CardTitle;
