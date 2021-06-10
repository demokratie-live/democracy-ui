/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { useTheme } from 'styled-components/native';

import * as S from './Icons.styled';
import { Forward, ThumbUp } from './icon/index';

export const Icons: React.FC = () => {
  const theme = useTheme();

  const color = theme.colors.text.secondary;

  return (
    <S.Container>
      <S.IconContainer>
        <ThumbUp color={color} width="75" height="75" />
        <S.Text>ThumbUp</S.Text>
      </S.IconContainer>
      <S.IconContainer>
        <Forward color={color} width="75" height="75" />
        <S.Text>Forward</S.Text>
      </S.IconContainer>
    </S.Container>
  );
};
