import React from 'react';
import { G } from 'react-native-svg';
import styled from 'styled-components/native';
import { constituencySvgs } from './Constituencies';
import { CountryMapSvg } from './CountryMapSvg';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { useTheme } from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  flex: 1;
`;

export interface CountryMapProps {
  width: number;
  data: {
    procedure: {
      procedureId: string;
      voted: boolean;
      communityVotes: {
        constituencies: Array<{
          yes: number;
          no: number;
          abstination: number;
          total: number;
          constituency: string;
        }>;
      } | null;
    };
  };
}

export const CountryMap: React.FC<CountryMapProps> = ({ data, width }) => {
  const theme = useTheme();
  if (!data?.procedure.communityVotes) {
    return null;
  }
  const allConstituencies = data.procedure.communityVotes;

  const maxVotersConstituency = max(
    allConstituencies.constituencies.map(({ total }) => total),
  );

  return (
    <Container>
      <CountryMapSvg width={width / 1.5}>
        {Object.keys(constituencySvgs).map((constituencyI) => {
          const constituencyData = allConstituencies.constituencies.find(
            ({ constituency }) => constituency === constituencyI,
          );
          const {
            constituency,
            yes,
            abstination,
            no,
            total,
          } = constituencyData || {
            constituency: constituencyI,
            yes: 0,
            abstination: 0,
            no: 0,
            total: 0,
          };

          const yesNoValue = (yes - no) / total;
          const abstinationValue = abstination / total / 2;

          const colorValue =
            yesNoValue === 0
              ? 0
              : yesNoValue > 0
              ? yesNoValue - abstinationValue
              : yesNoValue + abstinationValue;
          const colorRange = scaleLinear()
            .domain([-1, 0, 1])
            .range([
              (theme.colors.vote.community.no as unknown) as number,
              (theme.colors.vote.community.abstination as unknown) as number,
              (theme.colors.vote.community.yes as unknown) as number,
            ]);
          const opacityRange = scaleLinear().domain([0, 1]).range([0.3, 1]);
          return (
            <G
              key={`constituency-${constituency}`}
              opacity={
                total ? opacityRange(total / (maxVotersConstituency || 0)) : 0.5
              }
            >
              {(constituencySvgs as any)[constituency]({
                fill: total
                  ? colorRange(colorValue)
                  : theme.colors.background.secondary,
                stroke: theme.colors.primary,
              })}
            </G>
          );
        })}
      </CountryMapSvg>
    </Container>
  );
};
