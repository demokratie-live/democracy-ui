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

  // reactOptions: {
  //   fastRefresh: true,
  //   strictMode: true,
  // },

  typescript: {
    check: true,
  },

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native$": "react-native-web",
    };

    return config;
  },
};
