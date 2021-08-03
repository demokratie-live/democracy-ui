import React, { useState } from 'react';
import * as S from './Foldable.styled';

export interface FoldableProps {
  title: string;
  opened?: boolean;
  paddingHorizontal?: number;
  children: React.ReactNode;
}

export const Foldable: React.FC<FoldableProps> = ({
  title,
  opened = false,
  paddingHorizontal = 18,
  children,
}) => {
  const [open, setOpen] = useState(opened);

  const toggleOpen = React.useCallback(() => {
    setOpen((v) => !v);
  }, []);

  return (
    <S.Wrapper>
      <S.Header onPress={toggleOpen}>
        <S.Headline>{title}</S.Headline>
        <S.CollapseIcon open={open} />
      </S.Header>
      {open && (
        <>
          <S.Divider />
          <S.Content paddingHorizontal={paddingHorizontal}>
            {children}
          </S.Content>
        </>
      )}
      <S.Divider />
    </S.Wrapper>
  );
};
