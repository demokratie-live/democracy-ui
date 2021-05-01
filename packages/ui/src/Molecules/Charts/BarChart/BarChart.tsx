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
  text?: {
    space?: number;
  };
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  width,
  height,
  selectedParty,
  setSelectedParty,
  text = { space: 50 },
}) => {
  const theme = useContext(ThemeContext);

  const yValue = ({ party }: { party: string }) => party;

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, height])
    .padding(0.2);

  return (
    <Svg width={width} height={height}>
      {data.map(({ party, deviants }, i) => (
        <G
          key={`bar-${party}`}
          transform={`translate(0 ${yScale(party) || 0})`}
        >
          <Text
            opacity={i === selectedParty ? 1 : 0.5}
            key={`axis-${party}`}
            dy={yScale.bandwidth() / 2 + 4}
            fill={theme.colors.text.primary}
          >
            {party}
          </Text>
          <Bar
            x={text.space}
            active={i === selectedParty}
            data={deviants}
            width={width}
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
