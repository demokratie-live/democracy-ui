import React from 'react';

import { CountryMapProps, CountryMap } from '.';

export const CountryMapStory: React.FC<CountryMapProps> = ({ ...props }) => {
  return <CountryMap {...props}></CountryMap>;
};
