import React from 'react';
import styled from 'styled-components/native';

interface Props {
  voted: boolean;
  votes: number;
}

const Number = styled.Text<Pick<Props, 'voted'>>`
  color: ${({ voted, theme }) =>
    voted ? theme.colors.text.colored : theme.colors.text.primary};
  font-weight: bold;
`;

export const VotesIndex: React.FC<Props> = ({ votes, voted }) => (
  <Number voted={voted}>{votes}</Number>
);
