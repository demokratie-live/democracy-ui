import styled from 'styled-components/native';

export const Image = styled.Image.attrs(({ borderRadius }) => ({
  resizeMode: borderRadius ? 'contain' : 'cover',
}))`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : '50%'};
`;
