import React from 'react';
import { useTheme } from 'styled-components/native';
import { DefaultTheme } from '../../../theme';
import * as S from './VoteButton.styled';

export type Decisions = 'YES' | 'ABSTINATION' | 'NO';

export interface VoteButtonProps {
  decision: Decisions;
}

const getDecisionColor = (decision: Decisions, theme: DefaultTheme) => {
  const ding = decision.toLowerCase() as 'yes' | 'abstination' | 'no';
  return theme.colors.vote.community[ding];
};

export const VoteButton: React.FC<VoteButtonProps> = ({ decision }) => {
  const theme = useTheme();

  const backgroundColor = getDecisionColor(decision, theme);

  let rotation = 0;
  if (decision === 'ABSTINATION') {
    rotation = -90;
  } else if (decision === 'NO') {
    rotation = -180;
  }

  return (
    <S.CircleButton size={88} color={backgroundColor}>
      <S.ThumbUp color={theme.colors.text.secondary} rotation={rotation} />
    </S.CircleButton>
  );
};
