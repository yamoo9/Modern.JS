// entry file
// 진입 파일
// 다른 모듈을 읽어오는 역할

// 모듈 로드
// import { trio } from './modules/maths';
import { off } from './modules/dom';
import $ from 'jquery';

// console.log( trio(9) ); // 9 * 9 * 9

// let body = document.querySelector('body');
let body = $('body');

let touchBodyAction = (evt) => {
	console.log(evt.target);
	off(evt.target, 'click', touchBodyAction);
};

body.on('click', touchBodyAction);



// on(body, 'touchstart', touchBodyAction);