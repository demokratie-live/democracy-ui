import React from 'react';
import { Platform } from 'react-native';
import { arc, pie } from 'd3';
import { PieArcDatum } from 'd3-shape';
import { G, Path, Svg as SvgCmp } from 'react-native-svg';
import styled from 'styled-components/native';

export interface ChartEntry {
  name: string;
  value: number;
  color: string;
  highlight?: boolean;
}

export interface PieChartProps {
  size: number;
  data: ChartEntry[];
}

const Svg = styled(SvgCmp)`
  flex: 1;
  align-self: stretch;
`;

export const PieChart: React.FC<PieChartProps> = ({ size, data }) => {
  const pieObj = pie<ChartEntry>()
    .value((d) => d.value)
    .sort(null);

  const arcs = pieObj(data);

  const paths = arcs.map((value) => {
    const path = arc<PieArcDatum<ChartEntry>>()
      .outerRadius(
        size / 2 - size / 10 + (value.data.highlight ? size / 10 : 0),
      )
      .innerRadius(0)(value);
    //
    return path;
  });

  const viewBox =
    Platform.OS === 'web'
      ? `-${size / 2} -${size / 2} ${size} ${size}`
      : undefined;

  return (
    <Svg width={size} height={size} viewBox={viewBox}>
      <G x={size / 2} y={size / 2}>
        {paths.map((item, i) =>
          item ? (
            <Path
              key={data[i].name}
              fill={data[i].color}
              strokeWidth={size / 100}
              d={item}
            />
          ) : null,
        )}
      </G>
    </Svg>
  );
};
