import React from 'react';
import { PaginationProps, Pagination } from './Pagination';

export const PaginationStory: React.FC<PaginationProps> = ({ ...props }) => {
  return <Pagination {...props} />;
};
