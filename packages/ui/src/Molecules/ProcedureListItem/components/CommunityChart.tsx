import React from 'react';
import {
  PieChart as PieChartCmp,
  PieChartProps,
} from '../../../Atoms/PieChart';

export type CommunityChartProps = {
  communityChart?: React.ReactElement<PieChartProps> | PieChartProps;
};

export const CommunityChart: React.FC<CommunityChartProps> = ({
  communityChart,
}) =>
  communityChart ? (
    <>
      {React.isValidElement(communityChart) ? (
        communityChart
      ) : (
        <PieChartCmp {...communityChart} />
      )}
    </>
  ) : null;
