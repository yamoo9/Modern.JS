# Project Kit :: Pug, Sass, ECMAScript 2015

## 사용 환경

- Node.js v6+
- NPM
- Git

## 명령어

```bash
$ npm run dev    # yarn dev
$ npm run build  # yarn build
```

## 멀티 페이지 설정

각 페이지마다 Pug, JavaScript 파일을 추가하고자 할 경우,
`webpack.config.js` 파일 해당 부분에 추가

```js
module.exports = {

  // 엔트리 파일 설정
  entry: {
    app: './app.js',
    // ———————————————————————————————————————————————————————————
    // 페이지 마다 별도의 JavaScript 파일을 연결하고자 한다면 추가
    // ———————————————————————————————————————————————————————————
    index: es6Page('index'),
    about: es6Page('about'),
  },

  ...

  // 플러그인 설정
  plugins: [
    // ———————————————————————————————————————————————————————————
    // 페이지 마다 별도의 Pug 파일을 연결하고자 한다면 추가
    // ———————————————————————————————————————————————————————————
    pugPage('index'),
    pugPage('about'),
  ],

}
```

## 멀티 페이지 스타일 설정

각 페이지마다 Sass 스타일 파일을 추가하고자 할 경우,
`es6/pages/` 경로에 존재하는 해당 JS 파일에 추가
(`sass/pages` 경로에 해당 Sass 파일이 존재해야 함)

```js
// es6/pages/index.js
// ——————————————————————————————————————
// 스타일 모듈 로드
// sass 모듈을 불러오고자 할 때 사용
// ——————————————————————————————————————
import 'sass/pages/index.scss';
```

<!-- https://github.com/simonswiss/Multi-page-Jade-Webpack -->