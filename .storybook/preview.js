import '!style-loader!css-loader!sass-loader!../src/styles/sass/globals.scss';
//import '../src/styles/sass/globals.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}