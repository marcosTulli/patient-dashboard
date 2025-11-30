import React from 'react';
import { Text } from '../index';
import { type TextProps } from '../types';

export const LabelLarge: React.FC<Omit<TextProps, 'type' | 'size'>> = ({ children, ...props }) => {
  return (
    <Text {...props} type="label" size="large">
      {children}
    </Text>
  );
};
