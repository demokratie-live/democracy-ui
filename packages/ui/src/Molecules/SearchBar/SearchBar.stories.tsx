import React from 'react';
import { SearchBar, SearchBarProps } from './SearchBar';

export const SearchBarStory: React.FC<SearchBarProps> = ({ ...props }) => {
  return <SearchBar {...props} />;
};
