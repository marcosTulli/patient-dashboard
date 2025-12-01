import React from 'react';
import { Text } from '../index';
import { type TextProps } from '../types';

export const TitleLarge: React.FC<Omit<TextProps, 'type' | 'size'>> = ({ children, ...props }) => {
  return (
    <Text {...props} type="title" size="large">
      {children}
    </Text>
  );
};
