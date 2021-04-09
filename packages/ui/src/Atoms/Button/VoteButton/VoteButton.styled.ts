import styled from 'styled-components/native';

export interface VoteButtonProps {
  size: number;
  color: string;
}

export const VoteButton = styled.TouchableOpacity<VoteButtonProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  border-color: ${({ color }) => `${color}CC`};
  border-radius: ${({ size }) => `${size / 2}px`}; // TODO Try 50%
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;
