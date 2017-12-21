const webpack = require('webpack');
const path = require('path');

// webpack config
const config = {
  // 진입(entry)
  // 문자, 배열, 객체 등
  entry: {
    app: './src/main.js',
    vender: ['jquery', 'lodash'],
  },
  // 출력(output)
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  // 모듈(module)
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extentions: ['.js', '.json', '.css', '.es6', '.vue', '.ts'],
  },
  // 플러그인(plugin)
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};

// export module
// CommonJS 모듈 출력
module.exports = config;