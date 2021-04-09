import React from 'react';
import * as S from './Circle.styled';

export type CircleButtonProps = S.CircleProps;

export const CircleButton: React.FC<CircleButtonProps> = ({
  color,
  size,
  children,
  ...props
}) => (
  <S.Circle {...props} {...{ color, size }}>
    {children}
  </S.Circle>
);
