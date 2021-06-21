import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export interface CircleProps {
  size: number;
  color: string;
  onPress?: TouchableOpacityProps['onPress'];
}

export const Circle = styled.TouchableOpacity<CircleProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  border-color: ${({ color }) => `${color}CC`};
  border-radius: ${({ size }) => `${size / 2}px`};
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;
