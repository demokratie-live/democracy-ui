import React from 'react';
import { StateButtonProps, StateButton } from './StateButton';

export const StateButtonStory: React.FC<StateButtonProps> = ({
  children,
  ...props
}) => {
  return <StateButton {...props}>{children}</StateButton>;
};
