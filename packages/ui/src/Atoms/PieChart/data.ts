import { ChartEntry } from '.';
import { lightTheme, darkTheme } from '../../theme';

export const lightData: ChartEntry[] = [
  {
    name: 'yes',
    value: 2,
    color: lightTheme.colors.votesUser.yes,
    highlight: true,
  },
  {
    name: 'abstination',
    value: 3,
    color: lightTheme.colors.votesUser.abstination,
  },
  {
    name: 'no',
    value: 1,
    color: lightTheme.colors.votesUser.no,
  },
];

export const darkData: ChartEntry[] = [
  {
    name: 'yes',
    value: 2,
    color: darkTheme.colors.votesUser.yes,
    highlight: true,
  },
  {
    name: 'abstination',
    value: 3,
    color: darkTheme.colors.votesUser.abstination,
  },
  {
    name: 'no',
    value: 1,
    color: darkTheme.colors.votesUser.no,
  },
];

export const exampleLength = lightData.length;
