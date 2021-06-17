import React from 'react';
import * as S from './DeputyListItem.styled';
import { Avatar, AvatarProps } from '../Avatar';

export interface DeputyListItemProps {
  avatar: AvatarProps;
  title: string;
  subtitle?: string;
}

export const DeputyListItem: React.FC<DeputyListItemProps> = ({
  avatar,
  title,
  subtitle,
  ...props
}) => {
  return (
    <S.DeputyListItem {...props}>
      <Avatar
        partyLogo={{ ...avatar.partyLogo, width: 48 }}
        profileImage={{ ...avatar.profileImage, height: 48, variant: 'round' }}
      />
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.TextWrapper>
      <S.Arrow />
    </S.DeputyListItem>
  );
};
