import React from 'react';
import { Typography } from '@mui/material';
import { type TextProps, type TextWeight } from './types';
import { sizeMap, variantMap } from '@theme';

const weightMap: Record<TextWeight, number> = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

export const Text: React.FC<TextProps> = ({
  children,
  type = 'content',
  size = 'medium',
  customSize,
  color = 'text.primary',
  weight = 'regular',
  align,
  gutterBottom = false,
  noWrap = false,
  sx,
  className,
  component,
}) => {
  const fontSize = customSize || sizeMap[type][size];
  const variant = variantMap[type][size];
  const fontWeight = weightMap[weight];

  const typographyProps: any = {
    variant,
    color,
    align,
    gutterBottom,
    noWrap,
    className,
    sx: {
      fontSize,
      fontWeight,
      ...sx,
    },
  };

  if (component) {
    typographyProps.component = component;
  }

  return <Typography {...typographyProps}>{children}</Typography>;
};
