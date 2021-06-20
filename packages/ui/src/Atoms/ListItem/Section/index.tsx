import React from 'react';
import styled from 'styled-components/native';

const SectionWrapper = styled.View`
  height: 28px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding-horizontal: ${({ theme }) => theme.spaces.default};
  justify-content: center;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
`;

export interface SectionProps {
  title: string;
}

export const Section: React.FC<SectionProps> = ({ title }) => (
  <SectionWrapper>
    <Title>{title}</Title>
  </SectionWrapper>
);
