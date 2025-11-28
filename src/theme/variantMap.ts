import { TextSize, TextType } from '@/components/common/Text/types';
import { TypographyProps } from '@mui/material';

export const variantMap: Record<TextType, Record<TextSize, TypographyProps['variant']>> = {
  title: {
    small: 'h6',
    medium: 'h5',
    large: 'h4',
    xlarge: 'h3',
  },
  label: {
    small: 'caption',
    medium: 'body2',
    large: 'body1',
    xlarge: 'subtitle1',
  },
  content: {
    small: 'body2',
    medium: 'body1',
    large: 'subtitle1',
    xlarge: 'h6',
  },
};
