import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "../packages/ui/src/theme";
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

addDecorator(withThemes(ThemeProvider, [lightTheme]));
