import React from 'react';
import styled from 'styled-components/native';

export interface VotesIndexProps {
  voted: boolean;
  votes: number;
}

const Number = styled.Text<Pick<VotesIndexProps, 'voted'>>`
  color: ${({ voted, theme }) =>
    voted ? theme.colors.text.colored : theme.colors.text.tertiary};
  font-weight: bold;
`;

export const VotesIndex: React.FC<VotesIndexProps> = ({ votes, voted }) => (
  <Number voted={voted}>{votes}</Number>
);
