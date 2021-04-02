import 'styled-components';
import { DefaultTheme as BaseDefaultTheme } from '../theme/default-theme';
export type { BaseDefaultTheme };
// Types for the Theme
declare module 'styled-components/native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends BaseDefaultTheme {}
}
