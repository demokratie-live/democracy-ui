import React from 'react';
import Svg from 'react-native-svg';
import { Bar, BarProps } from '../../Atoms/Chart/Bar';
import { lightTheme } from '../../theme';
import { DeputyListItem, DeputyListItemProps } from './DeputyListItem';

export const DeputyListItemStory: React.FC<DeputyListItemProps> = ({
  ...props
}) => {
  return <DeputyListItem {...props} />;
};

const MatchingBar: React.FC<BarProps> = ({ width, height, ...props }) => (
  <Svg width="100%" height={height}>
    <Bar {...{ width, height }} {...props} />
  </Svg>
);

export const DeputyListItemStoryWom: React.FC<DeputyListItemProps> = ({
  ...props
}) => {
  return (
    <DeputyListItem
      {...props}
      subtitle={
        <MatchingBar
          {...{
            data: [
              {
                value: 1,
                color: lightTheme.colors.vote.wom.match,
              },
              {
                value: 2,
                color: lightTheme.colors.vote.wom.missmatch,
              },
            ],
            width: 300,
            height: 20,
          }}
        />
      }
    />
  );
};
