// Print jQuery Version
// Factory 함수
// 캡슐화 (함수 스코프)
// 모듈 패턴 (IIFE)
(function ($) {

    // constructor vs prototype
    // jQuery.prototype
    // $.prototype
    // $.fn
    console.log($.fn.jquery);

    // $.fn VS $()
    // $.fn === jQuery 프로토타입 객체
    // $()  === jQuery {}
    console.log($().jquery);
}); //(window.jQuery);

// jQuery 프로그래밍
jQuery(document).ready(function ($) {
    // 캡슐화 $ === jQuery
    // .toggle-radio-container 내부의 button을 클릭하면
    // 클릭된 버튼은 활성화(시각적 표시), 다른 버튼은 비활성화

    // 1. 문서 객체 수집한 후, jQuery 객체화
    var buttons = $('button', '.toggle-radio-container');
    var active_class = 'is-loading';
    // 2. 이벤트 핸들러 정의
    var toggleRadioButton = function toggleRadioButton(e) {
        // 변수 참조
        var $this = $(this);
        // 클릭한 버튼의 형제들 중에 활성화된 것이 있다면
        // 비활성화를 한다.
        $this.siblings('.' + active_class).removeClass(active_class);
        // 메서드 체이닝(권장 X)
        // $(this)
        //     .siblings('.' + active_class)
        //     .removeClass(active_class)
        //     .end()
        //     .addClass(active_class);

        // 클릭한 버튼 활성화
        $this.addClass(active_class);
    };
    // 3. 수집된 jQuery객체에 이벤트 바인딩
    buttons.each(function (index, button) {
        $(button).on('click', toggleRadioButton);
    });
});
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

        $this.siblings('.' + active_class).removeClass(active_class);
        $this.addClass(function () {
            // AJAX 특정 시간이 지나면, 상태를 윈상 복귀
            // 시뮬레이션 window.setTimeout()
            window.setTimeout(function () {
                return $this.removeClass(active_class);
            }, 2000);
            return active_class;
        });
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
// jQuery Plugin Shell
(function () {
    var $ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.jQuery;

    try {
        // radioClass 플러그인을 이미 지원하는가?
        if (!$.fn.radioClass) {
            // 지원하지 않는다면 추가
            $.fn.radioClass = function (name) {
                var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

                // 메서드가 할 일(Logic)
                // this는 누구?
                // jQuery 객체 자신
                // 주의!
                // 화살표 함수를 사용하면
                // this는 jQuery 객체가 아니게 된다.
                // console.log(this);
                // 형제를 찾아야 한다.
                var siblings = this.siblings();
                // 형제 중 name에 해당하는 대상을 찾아
                // name에 해당하는 클래스를 제거
                // .find() vs .filter()
                // `p :nth-child(2)` vs `p:nth-child(2)`
                siblings.filter("." + name).removeClass(name);
                // 자신에게는 name에 해당하는 클래스를 추가
                this.addClass(name);

                // 플러그인 공정이 모두 끝나면 콜백 함수를 실행하라.
                // typeof cb === 'function' && cb();
                cb();

                // Method Chaining
                return this;
            };
        }
    } catch (error) {
        console.error(error);
    }
})();
