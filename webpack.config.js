//const path = require('path')
//const nodeExternals = require('webpack-node-externals');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/lib`,
    filename: "[name].js",
    library: "tods-storybook",
    libraryTarget: "umd",
    globalObject: "this",
    publicPath: "",
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "file-loader",
            options: {
              name: "css/[name].css",
              publicPath: "",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  externals: {
    react: "commonjs react",
  },
};

//CORRECT
/* 
   const getCommonConfig = (outputFileName) => ({
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: outputFileName,
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
          test: /\.(sass|css|scss)$/,           
          use: [
            "style-loader",
            {
              loader: "file-loader",
              options: {
                name: "css/[name].css"
              }
            },
            "css-loader",
            "sass-loader",
          ],
        },
      ]
    },
    externals: {
      'react': 'commonjs react' 
    }
  })
  
  const client = {
    ...getCommonConfig('index.browser.js'),
    target: 'web',
  }

  const server = {
    ...getCommonConfig('index.js'),
    target: 'node',
    externals: [nodeExternals()]
  }

  module.exports = [client, server]; 

  // finish


  /* const getCommonConfig = (outputFileName) => ({
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: outputFileName,
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
          test: /\.(sass|css|scss)$/,           
          use: [
            "style-loader",
            {
              loader: "file-loader",
              options: {
                  name: "[name].css",
                  publicPath: '',
              }
            },
            "css-loader",
            "sass-loader",
          ]
        },
      ],
    },
    externals: {
      'react': 'commonjs react' 
    }
  })
  
  const client = {
    ...getCommonConfig('index.browser.js'),
    target: 'web',
  }

  const server = {
    ...getCommonConfig('index.js'),
    target: 'node',
    externals: [nodeExternals()]
  }

  module.exports = [client, server]; */
