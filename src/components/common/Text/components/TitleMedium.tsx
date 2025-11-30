import React from 'react';
import { Text } from '../index';
import { type TextProps } from '../types';

export const TitleMedium: React.FC<Omit<TextProps, 'type' | 'size'>> = ({ children, ...props }) => {
  return (
    <Text {...props} type="title" size="medium">
      {children}
    </Text>
  );
};
