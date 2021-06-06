import React from 'react';
import styled from 'styled-components/native';
import GRUENEN from './B90_DIE_GRUENEN';
import Union from './CDU_CSU';
import FDP from './FDP';
import { SPD } from './SPD';

const Image = styled.Image`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export interface PartyProps {
  party: 'Union' | 'SPD' | 'FDP' | 'Grüne' | 'AfD' | 'Linke';
}

export const Party: React.FC<PartyProps> = ({ party, ...props }) => {
  switch (party) {
    case 'Union':
      return <Union width={150} {...props} />;
    case 'SPD':
      return <SPD width={150} {...props} />;
    case 'FDP':
      return <FDP width={150} {...props} />;
    case 'Grüne':
      return <GRUENEN width={150} {...props} />;
    case 'AfD':
      return (
        <Image
          width={150}
          height={59}
          source={require('./AfD.png')}
          {...props}
        />
      );
    case 'Linke':
      return (
        <Image
          width={150}
          height={56}
          source={require('./DIE_LINKE.png')}
          {...props}
        />
      );
    default:
      return null;
  }
};
