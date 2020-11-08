const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true }
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    // config.module.rules.push({
    //   test: /\.tsx?$/,
    //   use: [
    //     {
    //       loader: 'babel-loader',
    //       options: {
    //         sourceType: 'unambiguous',
    //         babelrc: false,
    //         presets: ['react-app']
    //       }
    //     }
    //   ]
    // },)
    return config
  }
}