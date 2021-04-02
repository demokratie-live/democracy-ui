import { ThemeProvider } from "styled-components/native";
import { darkTheme, DefaultTheme, lightTheme } from "../packages/ui/src/theme";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(withThemes(ThemeProvider, [lightTheme, darkTheme]));

export const onThemeSwitch = (context) => {
  const { theme } = context as { theme: DefaultTheme };
  const background = theme.name === "Dark" ? "#2c2f33" : "white";
  const parameters = {
    backgrounds: {
      default: background,
    },
  };
  return {
    parameters,
  };
};
