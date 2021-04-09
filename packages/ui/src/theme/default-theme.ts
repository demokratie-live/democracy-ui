import { Colors } from './colors';
import { FlattenSimpleInterpolation } from 'styled-components';
import { fontSizes } from './fontSizes';

export interface DefaultTheme {
  name: string;
  colors: Colors;
  textStyles: {
    button: {
      primary: FlattenSimpleInterpolation;
    };
  };
  fontSizes: typeof fontSizes;
}
