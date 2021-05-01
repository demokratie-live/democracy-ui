const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/**/*.stories.mdx",
  ],

  addons: [
    "@storybook/addon-links",
    "@react-theming/storybook-addon",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
  ],

  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },

  typescript: {
    check: true,
  },

  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      [
        "rename-jsx-attribute",
        {
          attributes: {
            onPress: "onClick",
          },
        },
      ],
    ],
  }),

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native$": "react-native-web",
      "react-native-svg": "react-native-svg-web",
    };

    config.resolve.alias["styled-components"] = path.resolve(
      "node_modules",
      "styled-components"
    );

    return config;
  },
};
