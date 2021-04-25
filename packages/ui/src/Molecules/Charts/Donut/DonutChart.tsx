import React from 'react';
import { arc, pie, PieArcDatum } from 'd3-shape';
import { G, Text, Svg, Path } from 'react-native-svg';
import { scaleOrdinal } from 'd3-scale';
import * as S from './DonutChart.styled';
import { useTheme } from 'styled-components/native';
import { Platform } from 'react-native';

interface ChartEntry {
  name: string;
  value: number;
}

export interface VotesDataEntry {
  [selection: string]: number;
}

export interface DonutChartProps {
  votesData: VotesDataEntry;
  colors: string[];
  innerTextTop: string;
  innerTextBottom: string;
  size: number;
  topLeftText?: string;
  topRightSvg?: React.ReactNode;
  hidePercentage?: boolean;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  votesData,
  colors,
  innerTextTop,
  innerTextBottom,
  size,
  topLeftText,
  topRightSvg,
  hidePercentage = false,
}) => {
  const theme = useTheme();

  const chartSize = size - size / 5;

  const dataLabels = Object.keys(votesData);

  const total = dataLabels.reduce<number>(
    (sum, key) => sum + votesData[key],
    0,
  );

  const preparedData = dataLabels.map((label) => ({
    name: label,
    value: votesData[label],
  }));

  const pieObj = pie<ChartEntry>()
    .value((d) => {
      return d.value;
    })
    .sort(null);

  const arcs = pieObj(preparedData);

  const pieEntryData = arcs.map((value) => {
    const arcGenerator = arc<PieArcDatum<ChartEntry>>()
      .outerRadius(chartSize / 2)
      .innerRadius(chartSize / 6);
    const path = arcGenerator(value);

    const textTransform = arcGenerator.centroid(value);
    console.log('textTransform', {
      translate: `${textTransform[0]} ${textTransform[1]}`,
    });

    const percentage = Math.round((value.data.value / total) * 100);

    return {
      path,
      textTransform,
      percentage,
    };
  });

  const vetColors = scaleOrdinal<string>().domain(dataLabels).range(colors);

  const viewBox =
    Platform.OS === 'web'
      ? `-${chartSize / 2} -${chartSize / 2} ${chartSize} ${chartSize}`
      : undefined;

  return (
    <S.Container>
      {!!topLeftText && (
        <S.TopContainere>
          <S.TopLeftText>{topLeftText}</S.TopLeftText>

          {topRightSvg}
        </S.TopContainere>
      )}
      <Svg width={chartSize} height={chartSize} viewBox={viewBox}>
        <G x={chartSize / 2} y={chartSize / 2}>
          {
            // pieChart has all the svg paths calculated in step 2)
            pieEntryData.map(({ path, textTransform, percentage }, index) =>
              path ? (
                <G key={'pie_shape_' + index}>
                  <Path
                    fill={vetColors(preparedData[index].name)}
                    strokeWidth={chartSize / 100}
                    d={path}
                  />
                  {!hidePercentage && percentage > 3 && (
                    <Text
                      y="6"
                      transform={`translate(${textTransform[0]} ${textTransform[1]})`}
                      fontSize={'18'}
                      textAnchor="middle"
                      fill={theme.colors.text.secondary}
                    >
                      {`${percentage}%`}
                    </Text>
                  )}
                </G>
              ) : null,
            )
          }
        </G>
        <G x={chartSize / 2} y={chartSize / 2}>
          <Text
            y={-4}
            fontSize="18"
            textAnchor="middle"
            fill={theme.colors.text.primary}
          >
            {innerTextTop}
          </Text>
          <Text
            y={15}
            fontSize="14"
            textAnchor="middle"
            fill={theme.colors.text.primary}
          >
            {innerTextBottom}
          </Text>
        </G>
      </Svg>
    </S.Container>
  );
};
