import React, { useContext } from 'react';
import { scaleLinear } from 'd3-scale';
import { G, Rect, Text } from 'react-native-svg';
import { ThemeContext } from 'styled-components/native';

export interface BarData {
  value: number;
  color: string;
}

export interface BarProps {
  data: BarData[];
  width: number;
  height: number;
  active?: boolean;
  x?: number;
}

export const Bar: React.FC<BarProps> = ({
  data,
  width,
  height,
  active = true,
  x = 0,
}) => {
  const themeContext = useContext(ThemeContext);
  const total = data.reduce<number>((sum, { value }) => sum + value, 0);
  const xScale = scaleLinear().domain([0, total]).range([0, width]);

  const getPercentage = (value: number, { x }: { x?: number } = {}) => {
    const percentage = Math.round((value / total) * 100);
    if (!active || percentage < 12) {
      return null;
    }
    return (
      <Text
        x={(xScale(value) || 0) + (x || 0) - 4}
        y={height / 2 + 5}
        fontSize={14}
        textAnchor="end"
        fill={themeContext.colors.text.secondary}
      >{`${percentage}%`}</Text>
    );
  };
  return (
    <G opacity={active ? 1 : 0.5}>
      {data.map(({ value, color }) => {
        x = x + xScale(value);
        return (
          <G key={color} transform={`translate(${-xScale(value) + x} 0)`}>
            <Rect width={xScale(value)} height={height} fill={color} />
            {getPercentage(value)}
          </G>
        );
      })}
    </G>
  );
};
