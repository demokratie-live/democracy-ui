import React from 'react';
import { useTheme } from 'styled-components/native';
import { PieChart } from '../../Atoms/PieChart';

import { ProcedureListItemProps, ProcedureListItem } from './ProcedureListItem';

export const ProcedureListItemStory: React.FC<ProcedureListItemProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();

  const decisions = ['YES', 'ABSTINATION', 'NO'];

  const highlighted = decisions[0];

  return (
    <ProcedureListItem
      {...props}
      title="Forschung zu Kernreaktoren der IV. Generation vorantreiben - Energieversorgung in Deutschland sichern"
      subtitle="Energieversorgung in Deutschland sichern"
      voted={true}
      votes={27164}
      date={new Date('2021-04-15')}
      communityChart={
        <PieChart
          data={[
            {
              name: 'YES',
              color: theme.colors.vote.community.yes,
              value: 7,
              highlight: highlighted === 'YES',
            },
            {
              name: 'ABSTINATION',
              color: theme.colors.vote.community.abstination,
              value: 1,
              highlight: highlighted === 'ABSTINATION',
            },
            {
              name: 'NO',
              color: theme.colors.vote.community.no,
              value: 2,
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
              value: 3,
              highlight: true,
            },
            {
              name: 'ABSTINATION',
              color: theme.colors.vote.government.abstination,
              value: 1,
              highlight: true,
            },
            {
              name: 'NO',
              color: theme.colors.vote.government.no,
              value: 6,
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
