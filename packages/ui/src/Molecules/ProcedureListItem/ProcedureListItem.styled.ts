import styled from 'styled-components/native';

export const ProcedureListItem = styled.View`
  flex-direction: row;
  padding-horizontal: ${({ theme }) => theme.spaces.default};
  padding-vertical: ${({ theme }) => theme.spaces.default};
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Subline = styled.Text`
  padding-top: 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const SideContainer = styled.View`
  align-items: flex-end;
  min-width: 50px;
  justify-content: space-between;
`;

export const PieChartContainer = styled.View`
  flex-direction: row;
  width: 45px;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.default};
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
`;
