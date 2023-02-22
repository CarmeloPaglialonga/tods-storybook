const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
      path: `${__dirname}/lib`,
      filename: '[name].js',
      library: 'tods-storybook',
      libraryTarget: 'umd',
    },
    resolve: {
      extensions: [".js", ".jsx", ".css", ".scss"]
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.(s*)css$/,        
            use: [
              "style-loader",
              {
                loader: "file-loader",
                options: {
                  name: "css/[name].css"
                }
              },
              "sass-loader"
            ]
          },
        ],
      },
      externals: {
        'react': 'commonjs react' 
      }
  }; 