import React from 'react';
import { useTheme } from 'styled-components/native';
import { PieChart } from '../../Atoms/PieChart';
import { randomDate } from '../../utils/randomDate';

import { ProcedureListItemProps, ProcedureListItem } from './ProcedureListItem';

export const ProcedureListItemStory: React.FC<ProcedureListItemProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();

  const decisions = ['YES', 'ABSTINATION', 'NO'];

  const highlighted = decisions[Math.floor(Math.random() * decisions.length)];

  return (
    <ProcedureListItem
      {...props}
      title="Forschung zu Kernreaktoren der IV. Generation vorantreiben - Energieversorgung in Deutschland sichern"
      subtitle="Energieversorgung in Deutschland sichern"
      voted={Math.random() < 0.5}
      votes={Math.floor(Math.random() * (1e5 - 0 + 1)) + 0}
      date={randomDate()}
      // dateEnd={randomDate()}
      communityChart={
        <PieChart
          data={[
            {
              name: 'YES',
              color: theme.colors.vote.community.yes,
              value: Math.random(),
              highlight: highlighted === 'YES',
            },
            {
              name: 'ABSTINATION',
              color: theme.colors.vote.community.abstination,
              value: Math.random(),
              highlight: highlighted === 'ABSTINATION',
            },
            {
              name: 'NO',
              color: theme.colors.vote.community.no,
              value: Math.random(),
              highlight: highlighted === 'NO',
            },
          ]}
          size={20}
        />
      }
      governmentChart={
        <PieChart
          data={[
            {
              name: 'YES',
              color: theme.colors.vote.government.yes,
              value: Math.random(),
              highlight: true,
            },
            {
              name: 'ABSTINATION',
              color: theme.colors.vote.government.abstination,
              value: Math.random(),
              highlight: true,
            },
            {
              name: 'NO',
              color: theme.colors.vote.government.no,
              value: Math.random(),
              highlight: true,
            },
          ]}
          size={20}
        />
      }
    >
      {children}
    </ProcedureListItem>
  );
};
