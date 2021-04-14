import React from 'react';
import { VotesIndex, VotesIndexProps } from '../../Atoms/ListItem/VotesIndex';
import { VoteDate, VoteDateProps } from '../../Atoms/VoteDate';
import {
  CommunityChart,
  CommunityChartProps,
} from './components/CommunityChart';
import {
  GovernmentChart,
  GovernmentChartProps,
} from './components/GovernmentChart';
import * as S from './ProcedureListItem.styled';

export interface ProcedureListItemProps
  extends CommunityChartProps,
    GovernmentChartProps,
    VotesIndexProps,
    VoteDateProps {
  isIntro?: boolean;
  title: string;
  subtitle?: string;
}

export const ProcedureListItem: React.FC<ProcedureListItemProps> = ({
  communityChart,
  governmentChart,
  voted,
  votes,
  title,
  isIntro,
  subtitle,
  date,
  dateEnd,
  ...props
}) => {
  return (
    <S.ProcedureListItem {...props}>
      <S.TextContainer>
        <S.Title numberOfLines={isIntro ? undefined : 3}>{title}</S.Title>
        {!!subtitle && (
          <S.Subline numberOfLines={isIntro ? undefined : 2}>
            {subtitle}
          </S.Subline>
        )}
      </S.TextContainer>
      <S.SideContainer>
        <VotesIndex {...{ voted, votes }} />
        <S.PieChartContainer>
          <GovernmentChart {...{ governmentChart }} />
          <CommunityChart {...{ communityChart }} />
        </S.PieChartContainer>
        <VoteDate {...{ date, dateEnd }} />
      </S.SideContainer>
    </S.ProcedureListItem>
  );
};
