// ————————————————————————————————————————————————————————————————————————————
// 개발 의존 모듈 로드
// ————————————————————————————————————————————————————————————————————————————
const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// ————————————————————————————————————————————————————————————————————————————
// 유틸리티 함수
// ————————————————————————————————————————————————————————————————————————————
function _path(src){
  return path.resolve(__dirname, src);
}

function pugPage(name){
  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: `${_path('./src/pug')}/${name === 'index' ? '' : 'pages/'}${name}.pug`,
    inject: false,
  });
}

function es6Page(name){
  return `./es6/pages/${name}.js`;
}

// ————————————————————————————————————————————————————————————————————————————
// Webpack 설정
// ————————————————————————————————————————————————————————————————————————————
module.exports = {

  // 컨텍스트 설정
  context: _path('./src'),

  // 엔트리 파일 설정
  entry: {
    app: './app.js',
    // ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽
    // 페이지 마다 별도의 JavaScript 파일을 연결하고자 한다면 추가
    index: es6Page('index'),
    about: es6Page('about'),
    // 벤더 설정
    vendor: ['jquery', 'lodash'],
  },

  // 아웃풋 파일 설정
  output: {
    publicPath: '/',
    path: _path('./dist'),
    filename: 'js/[name].js',
  },

  // 개발 서버 설정
  devServer: {
    contentBase: _path('./src'),
    inline: true,
    noInfo: true,
    open: true,
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: 8888,
  },

  // 모듈 로더 설정
  module: {
    rules: [

      // Pug
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'raw-loader'
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            }
          }
        ]
      },

      // Sass
      {
        test: /\.s(a|c)ss$/,
        // use: ['style-loader', 'css-loader', 'sass-loader'],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            }
          ]
        })
      },

      // Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },

      // File
        // {
        //   test: /\.(png|jpg|gif|svg)$/,
        //   loader: 'file-loader',
        //   options: {
        //     name: '[name].[ext]?[hash]'
        //   }
        // }

    ]
  },

  // 플러그인 설정
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true,
      // disable: true,
    }),
    // ———————————————————————————————————————————————————————————
    // 복사 설정
    // ———————————————————————————————————————————————————————————
    new CopyWebpackPlugin([
      { from: './images', to: 'images' }
    ]),
    // ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽ ➽
    // ———————————————————————————————————————————————————————————
    // Pug 페이지 설정
    // - 새 페이지를 등록할 경우, 아래에 pugPage(페이지_이름)을 추가합니다.
    // ———————————————————————————————————————————————————————————
    pugPage('index'),
    pugPage('about'),
  ],

  // 성능 설정
  // https://webpack.js.org/configuration/performance/
  performance: {
    // 힌트 설정: false 일 경우, 에셋 크기에 따른 경고를 무시
    hints: false
  },

  // 별칭 등록
  resolve: {
    alias: {
      sass: _path('./src/sass')
    }
  },

  // externals구성 옵션은 출력 번들에서 종속성을 제외하는 방법을 제공
  // https://webpack.js.org/configuration/externals/
  externals: {
    // 특정 import 패키지의 번들링을 방지, 런타임에 이러한 외부 종속성을 검색
    // 예를 들어 CDN에서 번들로 묶는 대신 jQuery를 포함할 경우, 아래 코드 추가
    jquery: 'jQuery'
  },

  // 소스맵 설정
  devtool: '#eval-source-map',

};


// ————————————————————————————————————————————————————————————————————————————
// 빌드 설정
// ————————————————————————————————————————————————————————————————————————————
if ( process.env.NODE_ENV === 'production' ) {
  module.exports.devtool = false;
  // 참고 URL:
  // https://vue-loader.vuejs.org/kr/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      // sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}