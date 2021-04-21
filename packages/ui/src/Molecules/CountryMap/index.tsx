import { max, scaleLinear } from 'd3';
import React, { useContext } from 'react';
import { G } from 'react-native-svg';
import styled, { ThemeContext } from 'styled-components/native';
import { constituencySvgs } from './Constituencies';
import { CountryMapSvg } from './CountryMapSvg';
import { useWindowDimensions } from 'react-native';

const Container = styled.View`
  align-items: center;
  flex: 1;
`;

export interface CountryMapProps {
  data: any;
}

export const CountryMap: React.FC<CountryMapProps> = ({ data }) => {
  const { width } = useWindowDimensions();

  const theme = useContext(ThemeContext);
  if (!data?.procedure.communityVotes) {
    return null;
  }
  const allConstituencies = data.procedure.communityVotes;

  const maxVotersConstituency = max(
    allConstituencies.constituencies.map(({ total }: any) => total),
  );

  return (
    <Container>
      <CountryMapSvg width={width / 1.5}>
        {allConstituencies.constituencies.map(
          ({ constituency, yes, abstination, no, total }: any) => {
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
              <G opacity={opacityRange(total / (maxVotersConstituency as any))}>
                {(constituencySvgs as any)[constituency](
                  colorRange(colorValue),
                )}
              </G>
            );
          },
        )}
      </CountryMapSvg>
    </Container>
  );
};
