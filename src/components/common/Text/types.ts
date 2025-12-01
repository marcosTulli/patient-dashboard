import { type TypographyProps } from '@mui/material';
import { type SxProps, type Theme } from '@mui/material/styles';
import type React from 'react';

export type TextType = 'title' | 'label' | 'content';
export type TextSize = 'small' | 'medium' | 'large' | 'xlarge';
export type TextWeight = 'light' | 'regular' | 'medium' | 'bold';

export interface TextProps {
  children: React.ReactNode;
  type?: TextType;
  size?: TextSize;
  customSize?: number;
  color?: TypographyProps['color'];
  weight?: TextWeight;
  align?: TypographyProps['align'];
  gutterBottom?: boolean;
  noWrap?: boolean;
  sx?: SxProps<Theme>;
  className?: string;
  component?: React.ElementType;
}
