import React from 'react';
import * as S from './VoteButton.styled';

export type VoteButtonButtonProps = S.VoteButtonProps;

export const VoteButtonButton: React.FC<VoteButtonButtonProps> = ({
  color,
  size,
  children,
}) => <S.VoteButton {...{ color, size }}>{children}</S.VoteButton>;
