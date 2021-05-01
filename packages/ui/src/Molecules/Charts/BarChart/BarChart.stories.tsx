import React, { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import styled from 'styled-components/native';
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

const FullSize = styled.View`
  width: 100%;
  height: 500px;
`;

export const BarChartFullSizeStory: React.FC<BarChartProps> = ({
  ...props
}) => {
  const [selectedParty, setSelectedParty] = useState(0);
  const [
    { width: chartWidth, height: chartHeith },
    setChartDimensions,
  ] = useState({ width: 0, height: 0 });

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setChartDimensions({ width, height });
  };

  return (
    <FullSize onLayout={onLayout}>
      <BarChart
        {...props}
        width={chartWidth}
        height={chartHeith}
        selectedParty={selectedParty}
        setSelectedParty={setSelectedParty}
      />
    </FullSize>
  );
};
