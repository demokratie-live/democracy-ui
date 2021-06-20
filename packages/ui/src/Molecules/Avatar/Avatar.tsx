import React from 'react';
import { PartyLogoProps } from '../../Atoms/PartyLogo';
import { ProfileImage, ProfileImageProps } from '../../Atoms/ProfileImage';
import * as S from './Avatar.styled';

export interface AvatarProps {
  profileImage: ProfileImageProps;
  partyLogo?: PartyLogoProps;
}

export const Avatar: React.FC<AvatarProps> = ({
  profileImage,
  partyLogo,
  ...props
}) => (
  <S.Avatar width={profileImage.height} {...props}>
    <ProfileImage {...profileImage} />
    {!!partyLogo && (
      <S.PartyLogo {...partyLogo} variant={profileImage.variant} />
    )}
  </S.Avatar>
);
