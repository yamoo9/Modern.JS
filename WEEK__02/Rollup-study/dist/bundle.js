(function () {
'use strict';

// 비공개
var trio = void 0;

trio = function trio(x) {
    return Math.pow(x, 3);
};

function on(el, type) {
    var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    el.addEventListener(type, handler);
}

function off(el, type, handler) {
    el.removeEventListener(type, handler);
}

// entry file
// 진입 파일
// 다른 모듈을 읽어오는 역할

// 모듈 로드
console.log(trio(9)); // 9 * 9 * 9

var body = document.querySelector('body');
var touchBodyAction = function touchBodyAction(evt) {
    console.log(evt.target);
    off(e.target, 'click', touchBodyAction);
};

on(body, 'touchstart', touchBodyAction);

}());
