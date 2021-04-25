import React from 'react';
import * as S from './ChartLegend.styled';

export interface ChartLegendData {
  label: string;
  value: number | null;
  color: string;
}

export interface ChartLegendProps {
  data: ChartLegendData[];
}

export const ChartLegend: React.FC<ChartLegendProps> = ({ data }) => {
  return (
    <S.VoteResultsWrapper>
      <S.VoteResultNumbers>
        {data.map(({ label, value, color }) => (
          <S.VoteResult key={label}>
            <S.VoteResultCircleNumber>
              <S.VoteResultCircle color={color} />
              <S.VoteResultNumber>{value}</S.VoteResultNumber>
            </S.VoteResultCircleNumber>
            <S.VoteResultLabel>{label}</S.VoteResultLabel>
          </S.VoteResult>
        ))}
      </S.VoteResultNumbers>
    </S.VoteResultsWrapper>
  );
};
