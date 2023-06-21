import styled from 'styled-components/native';

export const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Dot = styled.View<{ active: boolean }>`
  width: 11px;
  height: 11px;
  border-radius: 5px;
  margin-horizontal: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;
