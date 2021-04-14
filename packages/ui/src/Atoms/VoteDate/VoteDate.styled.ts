import styled from 'styled-components/native';

export interface VoteDateProps {
  size: number;
  color: string;
}

export const VoteDate = styled.TouchableOpacity<VoteDateProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  border-color: ${({ color }) => `${color}CC`};
  border-radius: ${({ size }) => `${size / 2}px`}; // TODO Try 50%
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;
