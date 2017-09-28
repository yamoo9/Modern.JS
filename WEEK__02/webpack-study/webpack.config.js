// ——————————————————————————————————————
// CommonJS 방식
// ——————————————————————————————————————

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 개발 의존성 모듈 로드
const path = require('path');

// 유틸리티 함수
function _path(src) {
  return path.resolve(__dirname, src);
}

// 웹팩 환경설정
module.exports = {

  // 컨텍스트 설정
  context: _path('./src'),

  // 입력 설정
  entry: './main.js',

  // 출력 설정
  output: {
    path: _path('./dist'),
    filename: 'bundle.js'
  },

  // 모듈 설정
  module: {
    // 규칙(들) 설정
    rules: [
      // Babel 설정
      // babel-loader
      {
        // 정규표현식을 사용해 babel-loader를 수행할 파일을 구분하여 처리
        test: /\.js$/,
        // 트랜스파이러 적용 제외 설정
        exclude: /node_modules/,
        // 로더 사용 설정
        use: {
          loader: 'babel-loader',
          options: {
            // .babelrc 사용했던 옵션 설정
            presets: ['env']
          }
        }
      },
      // CSS 설정
      // style-loader
      // css-loader
      {
        test: /\.css$/,
        // 로더 마다 세부 옵션 설정이 필요 없는 경우
        // use: ['style-loader', 'css-loader']
        // 로더 마다 세부 옵션 설정이 필요한 경우
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // Sass 설정
      // style-loader
      // css-loader
      // sass-loader
      {
        test: /\.s(a|c)ss$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          },
        ]
      }
    ]
  },

  // 개발 설정
  // 소스맵(sourcemap) 설정
  devtool: 'cheap-module-eval-source-map',
  // 관찰(watch) 설정
  // watch: true

  // 개발 서버 설정
  // webpack-dev-server 설정
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: _path('./dist'), // 콘텐츠 제공 서버 설정
    // port: 9000,        // 요청을 수신 대기 할 포트 번호 설정
    // color: true,       // CLI 컬러링 사용 설정
    // compress: true,    // gzip 압축 사용 설정
    // https: true,       // https 사용 설정
    inline: true,      // 인라인 모드 사용 설정
    hot: true,         // HMR(핫 모듈 리플레이스먼트) 모드 사용 설정
    open: true,        // 기본 브라우저 자동 열림 설정
    overlay: true,     // 경고,오류 발생 시 브라우저 전체화면 표시 설정
  },

  // 플러그인 설정
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

};