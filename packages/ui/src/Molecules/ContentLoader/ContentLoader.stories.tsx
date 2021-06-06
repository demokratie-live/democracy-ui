import React from 'react';
import {
  ListContentLoader,
  ListItemContentLoader,
  ListItemContentLoaderProps,
} from './ContentLoader';

export const ContentLoaderStory: React.FC<ListItemContentLoaderProps> = ({
  ...props
}) => {
  return <ListItemContentLoader {...props} />;
};

export const ContentLoaderListStory: React.FC<ListItemContentLoaderProps> = ({
  ...props
}) => {
  return <ListContentLoader {...props} />;
};
