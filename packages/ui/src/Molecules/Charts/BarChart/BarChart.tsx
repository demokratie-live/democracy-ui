import { scaleBand } from 'd3-scale';
import React, { useContext } from 'react';
import Svg, { G, Rect, Text } from 'react-native-svg';
import { ThemeContext } from 'styled-components/native';
import { Bar, BarData } from '../../../Atoms/Chart/Bar';

export interface WomPartyChartData {
  party: string;
  deviants: BarData[];
}

export interface BarChartProps {
  data: WomPartyChartData[];
  width: number;
  height: number;
  setSelectedParty: (i: number) => void;
  selectedParty: number;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  width,
  height,
  selectedParty,
  setSelectedParty,
}) => {
  const theme = useContext(ThemeContext);
  const margin = {
    top: 11,
    right: 11,
    bottom: 0,
    left: 80,
  };
  const innerWidth = width - margin.right - margin.left;
  const innerHeight = height - margin.top - margin.bottom - 13;

  const yValue = ({ party }: { party: string }) => party;

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.2);

  return (
    <Svg width={width} height={height - 13}>
      {data.map(({ party, deviants }, i) => (
        <G
          key={`bar-${party}`}
          transform={`translate(0 ${yScale(party) || 0})`}
        >
          <Text
            opacity={i === selectedParty ? 1 : 0.5}
            key={`axis-${party}`}
            dy="27"
            fill={theme.colors.text.primary}
          >
            {party}
          </Text>
          <Bar
            x={50}
            active={i === selectedParty}
            data={deviants}
            width={innerWidth}
            height={yScale.bandwidth()}
          />
          <Rect
            width="100%"
            height="100%"
            fill="transparent"
            opacity={0}
            onPress={() => setSelectedParty(i)}
          />
        </G>
      ))}
    </Svg>
  );
};
