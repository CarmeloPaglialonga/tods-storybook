module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    'storybook-addon-sass-postcss',
    {
      test: /\.(sass|scss)$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
          },
        },
      ],
    },
    '@storybook/addon-postcss',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
}