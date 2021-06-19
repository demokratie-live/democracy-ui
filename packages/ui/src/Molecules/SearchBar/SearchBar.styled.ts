import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Lens } from '../../Atoms/Icons/icon';

export const SearchBar = styled.View`
  height: 44px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SearchInputWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 5.5px;
  flex-direction: row;
  align-items: center;
  padding-left: 6px;
  height: 15px;
  margin-horizontal: 8px;
  margin-vertical: 8px;
`;

export const SearchInputIcon = styled(Lens).attrs(({ theme }) => ({
  color: theme.colors.text.tertiary,
  width: 16,
  height: 16,
}))``;

export const SearchInput = styled.TextInput.attrs(({ theme }) => ({
  clearButtonMode: 'always',
  autoFocus: true,
  placeholderTextColor: theme.colors.text.tertiary,
  underlineColorAndroid: 'transparent',
  selectionColor: theme.colors.text.primary,
  returnKeyType: 'search',
  autoCorrect: false,
}))`
  flex: 1;
  font-size: 14px;
  height: ${Platform.OS === 'ios' ? 28 : 50}px;
  padding-horizontal: 6px;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;
