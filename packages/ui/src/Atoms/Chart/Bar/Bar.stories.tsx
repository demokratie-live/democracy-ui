import React from 'react';
import Svg from 'react-native-svg';
import { BarProps, Bar } from './Bar';

export const BarStory: React.FC<BarProps> = ({ ...props }) => {
  return (
    <Svg width={props.width} height={props.height}>
      <Bar {...props} />
    </Svg>
  );
};
