import React from 'react';
import styled from 'styled-components/native';
import GRUENEN from './Grüne.png';
import Union from './CDU_CSU.png';
import FDP from './FDP.png';
import SPD from './SPD.png';
import AFD from './AfD.png';
import DIE_LINKE from './Linke.png';

const Image = styled.Image`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export interface PartyProps {
  party: 'Union' | 'SPD' | 'FDP' | 'Grüne' | 'AfD' | 'Linke';
  width: number;
}

export const Party: React.FC<PartyProps> = ({ party, width, ...props }) => {
  switch (party) {
    case 'Union':
      return (
        <Image
          width={width}
          height={width * 0.2653465347}
          source={Union}
          {...props}
        />
      );
    case 'SPD':
      return (
        <Image
          width={width}
          height={width * 0.2653465347}
          source={SPD}
          {...props}
        />
      );
    case 'FDP':
      return (
        <Image
          width={width}
          height={width * 0.2653465347}
          source={FDP}
          {...props}
        />
      );
    case 'Grüne':
      return (
        <Image
          width={width}
          height={width * 0.2653465347}
          source={GRUENEN}
          {...props}
        />
      );
    case 'AfD':
      return (
        <Image
          width={width}
          height={width * 0.2653465347}
          source={AFD}
          {...props}
        />
      );
    case 'Linke':
      return (
        <Image
          width={width}
          height={width * 0.2653465347}
          source={DIE_LINKE}
          {...props}
        />
      );
    default:
      return null;
  }
};
