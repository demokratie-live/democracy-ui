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
  size: number;
  setSelectedParty: (i: number) => void;
  selectedParty: number;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  size,
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
  const innerWidth = size - margin.right - margin.left;
  const innerHeight = size - margin.top - margin.bottom - 13;

  const yValue = ({ party }: { party: string }) => party;

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.2);

  return (
    <Svg
      width={size}
      height={size - 13}
      // viewBox={`-${size / 2} -${size / 2} ${size} ${size}`}
    >
      <G y={margin.top + 3}>
        {data.map(({ party }, i) => (
          <Text
            opacity={i === selectedParty ? 1 : 0.5}
            key={`axis-${party}`}
            y={
              yScale.bandwidth() +
              ((yScale(party) || 0) - yScale.bandwidth() / 2)
            }
            fill={theme.colors.text.primary}
          >
            {party}
          </Text>
        ))}
      </G>
      {/* <G translate={[margin.left, margin.top]}> */}
      {data.map(({ party, deviants }, i) => (
        <G
          key={`bar-${party}`}
          transform={`translate(${margin.left} ${yScale(party) || 0})`}
          rotation="50"
        >
          <Bar
            active={i === selectedParty}
            data={deviants}
            width={innerWidth}
            height={yScale.bandwidth()}
          />
          <Rect // onPress overlay
            onPress={() => setSelectedParty(i)}
            x={-margin.left}
            width={size}
            height={yScale.bandwidth()}
            fill="transparent"
          />
        </G>
      ))}
      {/* </G> */}
    </Svg>
  );
};
