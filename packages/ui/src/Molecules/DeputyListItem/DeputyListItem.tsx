import React from 'react';
import * as S from './DeputyListItem.styled';
import { Avatar, AvatarProps } from '../Avatar';

export interface DeputyListItemProps {
  avatar: AvatarProps;
  title: string;
  subtitle?: string;
  editMode?: boolean;
  state?: 'favorized' | 'checked' | 'none';
}

export const DeputyListItem: React.FC<DeputyListItemProps> = ({
  avatar,
  title,
  subtitle,
  editMode = false,
  state = 'none',
  ...props
}) => {
  return (
    <S.DeputyListItem {...props}>
      {editMode ? (
        <S.State
          state={
            state === 'checked'
              ? 'Checked'
              : state === 'favorized'
              ? 'Remove'
              : 'Add'
          }
        />
      ) : null}
      <Avatar
        partyLogo={
          avatar.partyLogo ? { ...avatar.partyLogo, width: 48 } : undefined
        }
        profileImage={{
          ...avatar.profileImage,
          height: 48,
          variant: 'round',
        }}
      />
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.TextWrapper>
      {!editMode ? <S.Arrow /> : null}
    </S.DeputyListItem>
  );
};
