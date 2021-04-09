import { ChartEntry } from '.';
import { lightTheme, darkTheme } from '../../theme';

export const lightData: ChartEntry[] = [
  {
    name: 'yes',
    value: 2,
    color: lightTheme.colors.vote.community.yes,
    highlight: true,
  },
  {
    name: 'abstination',
    value: 3,
    color: lightTheme.colors.vote.community.abstination,
  },
  {
    name: 'no',
    value: 1,
    color: lightTheme.colors.vote.community.no,
  },
];

export const darkData: ChartEntry[] = [
  {
    name: 'yes',
    value: 2,
    color: darkTheme.colors.vote.community.yes,
    highlight: true,
  },
  {
    name: 'abstination',
    value: 3,
    color: darkTheme.colors.vote.community.abstination,
  },
  {
    name: 'no',
    value: 1,
    color: darkTheme.colors.vote.community.no,
  },
];

export const exampleLength = lightData.length;
