import { type TextSize, type TextType } from '@components/common/Text/types';

export const sizeMap: Record<TextType, Record<TextSize, number>> = {
  title: {
    small: 24,
    medium: 28,
    large: 32,
    xlarge: 40,
  },
  label: {
    small: 18,
    medium: 20,
    large: 22,
    xlarge: 24,
  },
  content: {
    small: 20,
    medium: 22,
    large: 24,
    xlarge: 26,
  },
};
