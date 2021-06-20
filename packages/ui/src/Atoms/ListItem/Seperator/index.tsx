import React from 'react';
import styled from 'styled-components/native';

const Line = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const Seperator: React.FC = () => <Line />;
