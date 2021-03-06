import styled from 'styled-components/native';
import { StateButton } from '../../Atoms/Button/StateButton';
import { ForwardIcon } from '../../Atoms/Icons/icon';

export const DeputyListItem = styled.View`
  flex-direction: row;
  padding-horizontal: ${({ theme }) => theme.spaces.default};
  padding-vertical: ${({ theme }) => theme.spaces.small};
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

export const Arrow = styled(ForwardIcon).attrs(({ theme }) => ({
  fill: theme.colors.text.tertiary,
  width: theme.fontSizes.large,
  height: theme.fontSizes.large,
}))``;

export const State = styled(StateButton)`
  margin-right: ${({ theme }) => theme.spaces.default};
`;
