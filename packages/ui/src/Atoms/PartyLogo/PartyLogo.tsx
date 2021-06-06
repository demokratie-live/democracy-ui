import React from 'react';
import { Party, PartyProps } from './old';

export type PartyLogoProps = PartyProps;

export const PartyLogo: React.FC<PartyLogoProps> = ({ ...props }) => (
  <Party {...props} />
);
