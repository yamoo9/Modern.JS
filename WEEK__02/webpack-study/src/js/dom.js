
// ——————————————————————————————————————
// 의존성 개발 모듈 로드
// ——————————————————————————————————————

// /node_modules/ 디렉토리 내부에서 호출 ----------

// CommonJS (Node.js)
// const _ = require('lodash');

// ES6 Module (Node.js v6+)
import _ from 'lodash';

// src/utils/ 디렉토리 내부에서 호출 --------------

// CommonJS (Node.js)
// const validate = require('./utils/validate');

// ES6 Module (Node.js v6+)
import validate from './utils/validate';


// ES6 :: const, let
// const document = global.document;
let heading_content = ['Hello', 'Webpack', 'Module', 'Bundlers', ':)'];

// ES6 :: Arrow Function
let component_heading = content => {
  let el = document.createElement('h1');
  validate(_.isArray(content), '_.join() 함수를 사용하려면 배열이 요구됩니다.');
  el.textContent = _.join(content, ' ');
  return el;
};

// DOMScript
document.querySelector('.container').appendChild( component_heading(heading_content) );