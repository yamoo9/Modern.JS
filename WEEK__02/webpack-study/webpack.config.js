// ——————————————————————————————————————
// CommonJS 방식
// ——————————————————————————————————————

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
      {
        // 정규표현식을 사용해 babel-loader를 수행할 파일을 구분하여 처리
        test: /\.js$/,
        // 트랜스파이러 적용 제외 설정
        exclude: /node_modules/,
        // 로더 사용 설정
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'] // .babelrc 사용했던 옵션 설정
          }
        }
      },
      // CSS 설정
      // style-loader
      // css-loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};