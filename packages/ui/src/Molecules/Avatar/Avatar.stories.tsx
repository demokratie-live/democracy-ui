import React from 'react';
import { Avatar, AvatarProps } from './Avatar';

export const AvatarStory: React.FC<AvatarProps> = ({ ...props }) => {
  return <Avatar {...props} />;
};
