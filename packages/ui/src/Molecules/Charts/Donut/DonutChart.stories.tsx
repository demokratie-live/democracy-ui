import React from 'react';
import { DonutChartProps, DonutChart } from './DonutChart';

export const DonutChartStory: React.FC<DonutChartProps> = ({ ...props }) => {
  return <DonutChart {...props} />;
};
