// --------------------------------------------------------
// 모듈 개발 방식

// 개발(배포) 의존 모듈 로드
// CommonJS
// require('babel-polyfill');
// AMD
// UMD
// IIFE
// ES
// import "babel-polyfill";


// --------------------------------------------------------
// 인스턴스 메서드 VS 유틸리티 메서드 

// jQuery 객체(리스트) => 배열
// jQuery 유틸리티 메서드 $.makeArray()

// 객체를 생성해야지만 사용 가능한 메서드
// 객체(인스턴스)가 사용할 수 있는 ....
// 인스턴스 메서드
// $().each()

// 객체를 생성하지 않고도 사용 가능한 메서드
// 객체가 아닌 경우에 사용합니다.
// 일반 함수, 네임스페이스 객체에 종속된 속성
// 클래스(스태틱) 메서드
// $.each()


// --------------------------------------------------------
// babel-polyfill을 사용하는 이유

// ES6 새롭게 추가된 객체
// iteratable object
// string, array, arguments, set, map, weakset, weakmap
// array => set
// object => map

var data = [34, 56, 78, 34, 90];
// console.log(data);
var data_set = new Set(data); // unique
// console.log(data_set);


// --------------------------------------------------------
// jQuery + ES6 프로그래밍

jQuery(document).ready(function ($) {

    var buttons = $('button', '.toggle-radio-container');
    var active_class = 'is-loading';
    // ※ 화살표 함수 내부의 this는 무엇을 가리키나?
    var toggleRadioButton = function toggleRadioButton(e) {
        // console.log(this);
        // 화살표 함수 내부의 this는
        // 함수를 실행시킨 주체가 아니라,
        // 함수의 상위 영역을 참조하는 객체이다.
        // let $this = $(this);
        var $this = $(e.target);
        $this.radioClass(active_class, function () {
            window.setTimeout(function () {
                return $this.removeClass(active_class);
            }, 2000);
        });

        // $this.siblings(`.${active_class}`).removeClass(active_class);
        // $this.addClass(() => {
        //     // AJAX 특정 시간이 지나면, 상태를 윈상 복귀
        //     // 시뮬레이션 window.setTimeout()
        //     window.setTimeout(()=> $this.removeClass(active_class), 2000);
        //     return active_class;
        // });
    };

    buttons.each(function (index, button) {
        // this는 화살표 함수와 함께 사용할 때 기존과 다르게 동작한다.
        $(button).on('click', toggleRadioButton);
    });
});

// --------------------------------------------------------
// ES5 VS ES6 기본 매개변수 설정

// IIFE
// ES5
(function (global, $) {
    // default parameter value setting
    global = global || window;
    $ = $ || window.jQuery;
})();

function checkRequirejQuery() {
    if (!window.jQuery) {
        throw new Error('required jQuery');
    } else {
        return window.jQuery;
    }
}

// IIFE
// ES6
// defualt parameter
(function () {
    var global = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    var $ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : checkRequirejQuery();

    $('body').addClass('using-jQuery');
})();

// 나머지 매개변수
function sum() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    console.log(Array.isArray(args)); // true
    console.log(Array.isArray(arguments)); // false
    // ES5 까지 사용되던 arguments는 유사배열 객체로
    // 배열화, 배열의 slice() 메서드를 사용한 공정이 필요
    // 이 모든 과정이 불필요한 ....
}
