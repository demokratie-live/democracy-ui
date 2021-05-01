import React, { useState } from 'react';
import { BarChartProps, BarChart } from './BarChart';

export const BarChartStory: React.FC<BarChartProps> = ({ ...props }) => {
  const [selectedParty, setSelectedParty] = useState(0);
  return (
    <BarChart
      {...props}
      selectedParty={selectedParty}
      setSelectedParty={setSelectedParty}
    />
  );
};
