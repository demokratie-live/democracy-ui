import React from 'react';
import * as S from './Pagination.styled';



export interface PaginationProps {
  length: number;
  active: number;
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({ length, active, ...props }) => {
  return (
    <S.PaginationContainer {...props}>
    {Array.from(Array(length)).map((_,i) => <S.Dot key={i} active={i === active} />)}
    </S.PaginationContainer>
  );
};
