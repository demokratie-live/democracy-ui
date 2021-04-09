import styled from 'styled-components/native';

export const ColorGroupContainer = styled.View`
  padding: 5px;
`;

export const Group = styled.View`
  flex-direction: row;
`;

export const GroupTitle = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export interface ColorItemProps {
  color: string;
}

export const ColorItem = styled.View`
  align-items: center;
  margin: 10px;
`;

export const ColorItemColor = styled.View<ColorItemProps>`
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => color};
  border-radius: 100px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 1px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
`;
