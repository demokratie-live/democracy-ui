import styled from 'styled-components/native';
import { Forward } from '../../Atoms/Icons/icon';

export const DeputyListItem = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.spaces.default};
  align-items: center;
`;

export const TextWrapper = styled.View`
  padding-horizontal: ${({ theme }) => theme.spaces.default};
  flex: 1;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;
export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const Arrow = styled(Forward).attrs(({ theme }) => ({
  color: theme.colors.text.tertiary,
}))``;
