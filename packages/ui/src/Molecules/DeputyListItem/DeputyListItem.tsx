import React from 'react';
import * as S from './DeputyListItem.styled';
import { Avatar, AvatarProps } from '../Avatar';

export interface DeputyListItemProps {
  avatar: AvatarProps;
  title: string;
  subtitle?: string | React.ReactNode;
  editMode?: boolean;
  state?: 'favorized' | 'checked' | 'none';
  onStatePress?: (state: 'favorized' | 'checked' | 'none') => void;
}

export const DeputyListItem: React.FC<DeputyListItemProps> = ({
  avatar,
  title,
  subtitle,
  editMode = false,
  state = 'none',
  onStatePress,
  ...props
}) => (
  <S.DeputyListItem {...props}>
    {editMode ? (
      <S.State
        onPress={onStatePress && (() => onStatePress(state))}
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
      {typeof subtitle === 'string' ? (
        <S.Subtitle>{subtitle}</S.Subtitle>
      ) : (
        subtitle
      )}
    </S.TextWrapper>
    {!editMode ? <S.Arrow /> : null}
  </S.DeputyListItem>
);
