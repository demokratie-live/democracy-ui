import React from 'react';
import { useTheme } from 'styled-components/native';
import { CheckmarkIcon, PlusIcon, MinusIcon } from '../../Icons';
import * as S from './StateButton.styled';

export type STATE = 'Add' | 'Remove' | 'Checked';

export interface StateButtonProps {
  state: STATE;
}

export const StateButton: React.FC<StateButtonProps> = ({ state }) => {
  const theme = useTheme();

  let IconCmp: typeof CheckmarkIcon | typeof PlusIcon | typeof MinusIcon;
  let color: string;

  switch (state) {
    case 'Add':
      IconCmp = PlusIcon;
      color = theme.colors.vote.community.yes;
      break;
    case 'Remove':
      IconCmp = MinusIcon;
      color = theme.colors.vote.community.no;
      break;

    default:
      // Checked
      IconCmp = CheckmarkIcon;
      color = theme.colors.primary;
      break;
  }

  return (
    <S.CircleButton size={23} color={color}>
      <S.Icon as={IconCmp} color={theme.colors.text.secondary} size={11} />
    </S.CircleButton>
  );
};
