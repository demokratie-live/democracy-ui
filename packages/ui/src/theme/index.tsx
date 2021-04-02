import { DefaultTheme } from "./default-theme";
import { lightColors, darkColors } from "./colors";

export type { DefaultTheme };

export const lightTheme: DefaultTheme = {
  name: "Light",
  colors: lightColors,
};
export const darkTheme: DefaultTheme = {
  name: "Dark",
  colors: darkColors,
};
