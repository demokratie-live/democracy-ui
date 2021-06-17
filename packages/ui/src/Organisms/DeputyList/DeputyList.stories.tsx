import React from 'react';
import { DeputyList, DeputyListProps } from './DeputyList';

export const DeputyListStory: React.FC<DeputyListProps> = ({ ...props }) => {
  return <DeputyList {...props} />;
};
