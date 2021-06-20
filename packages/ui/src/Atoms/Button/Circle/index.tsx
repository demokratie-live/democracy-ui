import React from 'react';
import * as S from './Circle.styled';

export type CircleButtonProps = S.CircleProps;

export const CircleButton: React.FC<CircleButtonProps> = ({
  children,
  ...props
}) => <S.Circle {...props}>{children}</S.Circle>;
