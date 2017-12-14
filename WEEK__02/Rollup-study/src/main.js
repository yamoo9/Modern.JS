// entry file
// 진입 파일
// 다른 모듈을 읽어오는 역할

// 모듈 로드
import { trio } from './modules/maths';
import { on, off } from './modules/dom';

console.log( trio(9) ); // 9 * 9 * 9

const body = document.querySelector('body');
const touchBodyAction = (evt) => {
    console.log(evt.target);
    off(e.target, 'click', touchBodyAction);
};

on(body, 'touchstart', touchBodyAction);