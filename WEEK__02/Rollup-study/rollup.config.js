// import rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';


// export ES module
// $ rollup src/main.js -f umd > dist/bundle.js
// entry => input          --- src/main.js
// dest  => output.file    --- dist/bundle.js
// format => output.format --- umd
export default {
  // 인풋
  input: './src/main.js',
  // 아웃풋
  output: {
    // 파일
    file: './dist/bundle.js',
    // 모듈 포멧
    // iife | cjs | amd | umd | iife
    format: 'iife'
  },
  // 외부 개발 모듈
  external: [
    'jquery'
  ],
  // 전역 변수
  globals: {
    jquery: '$'
  },
  // 플러그인
  plugins: [
    eslint({
      include: './src/**/*.js'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
