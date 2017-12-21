// ——————————————————————————————————————
// CSS 모듈 로드
// ——————————————————————————————————————
import './main.css';

// ——————————————————————————————————————
// JavaScript 모듈 로드
// ——————————————————————————————————————
// ES6
// const query = s => document.querySelector(s);
// .js 확장자 생략 가능
import {query} from './utils';

// 불러온 모듈 코드 사용
let demo = query('.demo');

console.log(demo);