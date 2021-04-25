import styled from 'styled-components/native';

export const Container = styled.View`
  margin-horizontal: ${({ theme }) => theme.spaces.default};
  margin-vertical: ${({ theme }) => theme.spaces.default};
  align-items: center;
`;

export const TopContainere = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  left: 0;
  right: 0;
`;

export const TopLeftText = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
`;
