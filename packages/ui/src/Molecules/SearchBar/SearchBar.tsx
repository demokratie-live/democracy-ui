import React from 'react';
import * as S from './SearchBar.styled';

export interface SearchBarProps {
  textInput?: React.ComponentProps<typeof S.SearchInput>;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  textInput,
  ...props
}) => {
  return (
    <S.SearchBar {...props}>
      <S.SearchInputWrapper>
        <S.SearchInputIcon />
        <S.SearchInput {...textInput} />
      </S.SearchInputWrapper>
    </S.SearchBar>
  );
};
