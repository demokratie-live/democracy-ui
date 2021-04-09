import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  padding: 5px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Text = styled.Text`
  margin-top: 10px;
`;
