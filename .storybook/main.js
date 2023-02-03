// const path = require("path");

// module.exports = {
//   webpackFinal: async (config, { configType }) => {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: ["style-loader", "css-loader", "sass-loader"],
//       include: path.resolve(__dirname, "../"),
//     });
//     return config;
//   },
// };

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
