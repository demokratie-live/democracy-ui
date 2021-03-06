import { DefaultTheme } from './default-theme';
import { lightColors, darkColors } from './colors';
import { css } from 'styled-components/native';
import { fontSizes } from './fontSizes';
import { spaces } from './spaces';

export type { DefaultTheme };

export const lightTheme: DefaultTheme = {
  name: 'Light',
  colors: lightColors,
  textStyles: {
    button: {
      primary: css`
        font-size: ${fontSizes.default};
        color: ${lightColors.text.primary};
      `,
    },
  },
  fontSizes,
  spaces,
};
export const darkTheme: DefaultTheme = {
  name: 'Dark',
  colors: darkColors,
  textStyles: {
    button: {
      primary: css`
        font-size: ${fontSizes.default};
        color: ${darkColors.text.secondary};
      `,
    },
  },
  fontSizes,
  spaces,
};
