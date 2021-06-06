import React from 'react';
import { Party, PartyProps } from './old';

export interface PartyLogoProps extends PartyProps {
  width: number;
}

export const PartyLogo: React.FC<PartyLogoProps> = ({
  width = 150,
  ...props
}) => <Party width={width} {...props} />;
