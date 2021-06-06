import React from 'react';
import { PartyLogo, PartyLogoProps } from './PartyLogo';

export const PartyLogoStory: React.FC<PartyLogoProps> = ({ ...props }) => {
  return <PartyLogo {...props} />;
};
