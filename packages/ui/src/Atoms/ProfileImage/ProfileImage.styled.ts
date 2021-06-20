import { Platform } from 'react-native';
import styled from 'styled-components/native';

export interface ImageProps {
  width: number;
  height: number;
  borderRadius?: number;
}

export const Image = styled.Image.attrs(({ borderRadius }) => ({
  resizeMode: borderRadius ? 'contain' : 'cover',
}))<ImageProps>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: ${({ borderRadius, width }) =>
    borderRadius
      ? `${borderRadius}px`
      : Platform.OS === 'web'
      ? '50%'
      : `${width / 2}px`};
`;
