import React from 'react';
import { BarChartProps, BarChart } from './BarChart';

export const BarChartStory: React.FC<BarChartProps> = ({ ...props }) => {
  return <BarChart {...props} setSelectedParty={() => undefined} />;
};
