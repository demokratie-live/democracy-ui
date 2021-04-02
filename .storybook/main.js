module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/**/*.stories.mdx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native$": "react-native-web",
    };

    return config;
  },
};
