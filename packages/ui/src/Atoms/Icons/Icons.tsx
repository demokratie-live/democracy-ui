/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { useTheme } from 'styled-components/native';

import * as S from './Icons.styled';
import * as AllIconSvgs from './icon/index';

export const Icons: React.FC = () => {
  const theme = useTheme();

  const color = theme.colors.text.secondary;

  return (
    <S.Container>
      {Object.keys(AllIconSvgs).map((key) => {
        const IconCmp = (AllIconSvgs as { [key: string]: any })[key];
        return (
          <S.IconContainer key={key}>
            <IconCmp fill={color} color={color} width="75" height="75" />
            <S.Text>{key}</S.Text>
          </S.IconContainer>
        );
      })}
    </S.Container>
  );
};
