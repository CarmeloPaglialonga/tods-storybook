module.exports = {
    entry: './src/index.js',
    output: {
      path: `${__dirname}/lib`,
      filename: 'index.js',
      library: 'tods-storybook',
      libraryTarget: 'umd',
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        },
        ],
      },
      externals: {
        'react': 'commonjs react' 
      }
  };