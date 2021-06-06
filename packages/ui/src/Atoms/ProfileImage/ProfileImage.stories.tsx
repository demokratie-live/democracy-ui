import React from 'react';
import { ProfileImage, ProfileImageProps } from './ProfileImage';

export const ProfileImageStory: React.FC<ProfileImageProps> = ({
  ...props
}) => {
  return <ProfileImage {...props} />;
};
