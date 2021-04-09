import React from 'react';
import { VoteButtonProps, VoteButton } from '.';

export const VoteButtonStory: React.FC<VoteButtonProps> = ({
  children,
  ...props
}) => {
  return <VoteButton {...props}>{children}</VoteButton>;
};
