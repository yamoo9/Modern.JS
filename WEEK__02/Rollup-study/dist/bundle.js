(function () {
'use strict';

// 비공개
let trio;

trio = x => Math.pow(x, 3);

function on(el, type, handler = ()=>{}) {
    el.addEventListener(type, handler);
}

function off(el, type, handler) {
    el.removeEventListener(type, handler);
}

// entry file
// 진입 파일
// 다른 모듈을 읽어오는 역할

// 모듈 로드
console.log( trio(9) ); // 9 * 9 * 9

const body = document.querySelector('body');
const touchBodyAction = (evt) => {
    console.log(evt.target);
    off(e.target, 'click', touchBodyAction);
};

on(body, 'touchstart', touchBodyAction);

}());
