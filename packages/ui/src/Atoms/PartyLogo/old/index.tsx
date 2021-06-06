import React from 'react';
import styled from 'styled-components/native';
import GRUENEN from './B90_DIE_GRUENEN';
import Union from './CDU_CSU';
import FDP from './FDP';
import { SPD } from './SPD';
import AFD from './AfD.png';
import DIE_LINKE from './DIE_LINKE.png';

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
      return <Union width={width} {...props} />;
    case 'SPD':
      return <SPD width={width} {...props} />;
    case 'FDP':
      return <FDP width={width} {...props} />;
    case 'Grüne':
      return <GRUENEN width={width} {...props} />;
    case 'AfD':
      return (
        <Image
          width={width}
          height={width * 0.3933333333}
          source={AFD}
          {...props}
        />
      );
    case 'Linke':
      return (
        <Image
          width={width}
          height={width * 0.3733333333}
          source={DIE_LINKE}
          {...props}
        />
      );
    default:
      return null;
  }
};
