import React from 'react';
import { DeputyListItem, DeputyListItemProps } from './DeputyListItem';

export const DeputyListItemStory: React.FC<DeputyListItemProps> = ({
  ...props
}) => {
  return <DeputyListItem {...props} />;
};
