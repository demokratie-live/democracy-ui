import React from 'react';
import {
  PieChart as PieChartCmp,
  PieChartProps,
} from '../../../Atoms/PieChart';

export type GovernmentChartProps = {
  governmentChart?: React.ReactElement<PieChartProps> | PieChartProps;
};

export const GovernmentChart: React.FC<GovernmentChartProps> = ({
  governmentChart,
}) =>
  governmentChart ? (
    <>
      {React.isValidElement(governmentChart) ? (
        governmentChart
      ) : (
        <PieChartCmp {...governmentChart} />
      )}
    </>
  ) : null;
