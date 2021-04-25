import React from 'react';
import { ChartLegendProps, ChartLegend } from './ChartLegend';

export const ChartLegendStory: React.FC<ChartLegendProps> = ({ ...props }) => {
  return <ChartLegend {...props} />;
};
