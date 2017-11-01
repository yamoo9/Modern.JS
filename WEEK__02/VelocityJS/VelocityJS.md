###### JavaScript Library
# VelocityJS

> 목차를 펼쳐 보려면 아래  `► 목차`를 클릭하세요.

<details>
  <summary>목차</summary>

### VelocityJS
  - [VelocityJS를 사용해야 하는 이유](#velocityjs를-사용해야-하는-이유)
  - [1. 파일 다운로드 및 CDN 로드](#1-파일-다운로드-및-cdn-로드)
  - [2. 기본 사용법](#2-기본-사용법)
    - [2-1. jQuery와 VelocityJS 사용하기](#2-1-jquery와-velocityjs-사용하기)
      - [jQuery, VelocityJS 애니메이션 설정 코드는 매우 유사](#jquery-velocityjs-애니메이션-설정-코드는-매우-유사)
    - [2-2. jQuery 없이 VelocityJS 사용하기](#2-2-jquery-없이-velocityjs-사용하기)
  - [3. jQuery VS VelocityJS 코드 비교](#3-jquery-vs-velocityjs-코드-비교)
    - [3-1. CSS 속성 애니메이션](#3-1-css-속성-애니메이션)
    - [3-2. VelocityJS로 slide, Fade 사용하기](#3-2-velocityjs로-slide-fade-사용하기)
    - [3-3. VelocityJS로 slideToggle 구현하기](#3-3-velocityjs로-slidetoggle-구현하기)
  - [4. VelocityJS 오리지널 기능](#4-velocityjs-오리지널-기능)
    - [4-1. VelocityJS 스크롤 애니메이션](#4-1-velocityjs-스크롤-애니메이션)
    - [4-2. VelocityJS 리버스(reverse) 애니메이션](#4-2-velocityjs-리버스reverse-애니메이션)
  - [4. UI Pack](#4-ui-pack)
    - [4-1. 파일 다운로드 및 CDN 로드](#4-1-파일-다운로드-및-cdn-로드)
    - [4-2. stagger 옵션을 사용한 순차 애니메이션](#4-2-stagger-옵션을-사용한-순차-애니메이션)
  - [5. 애니메이션 시퀀스](#5-애니메이션-시퀀스)

### [레퍼런스](#레퍼런스)
  - [기본](#기본)
    - [기본: 전달인자](#기본-전달인자)
      - [기본: 옵션 재정의 - 기본 옵션](#기본-옵션-재정의---기본-옵션)
      - [기본: 전달인자 - 1개의 객체 설정](#기본-전달인자---1개의-객체-설정)
    - [기본: 속성맵](#기본-속성맵)
      - [기본: 단위](#기본-단위)
    - [기본: 체이닝](#기본-체이닝)
  - [옵션](#옵션)
  - [옵션: 지속시간(duration)](#옵션-지속시간duration)
  - [시간 별칭](#시간-별칭)
    - [옵션: 이징(Easing)](#옵션-이징easing)
      - [옵션: 속성 별 개별 이징](#옵션-속성-별-개별-이징)
    - [옵션: 사용자 정의 이징(고급)](#옵션-사용자-정의-이징고급)
    - [옵션: 대기열(큐, queue)](#옵션-대기열큐-queue)
      - [병렬(parallals) 애니메이션](#병렬parallals-애니메이션)
    - [옵션: 시작/진행/종료 콜백 함수](#옵션-시작진행종료-콜백-함수)
      - [시작(Begin)](#시작begin)
      - [종료(Complete)](#종료complete)
      - [진행(Progress)](#진행progress)
    - [옵션: 모바일 하드웨어 가속](#옵션-모바일-하드웨어-가속)
    - [옵션: 루프(Loop)](#옵션-루프loop)
    - [옵션: 지연시간(delay)](#옵션-지연시간delay)
    - [옵션: 디스플레이(display) & 비져빌리티(visibility) 설정](#옵션-디스플레이display--비져빌리티visibility-설정)
      - [소개](#소개)
        - [CSS `display`, `visibility` 속성 설정에 따른 차이점](#css-display-visibility-속성-설정에-따른-차이점)
      - [사용법](#사용법)
  - [명령](#명령)
    - [명령: 페이드(fade) & 슬라이드(slide)](#명령-페이드fade--슬라이드slide)
      - [동작(Behavior) 방법](#동작behavior-방법)
      - [페이드인(fadeIn) / 페이드아웃(fadeOut)](#페이드인fadein--페이드아웃fadeout)
      - [슬라이드업(slideUp) / 슬라이드다운(slideDown)](#슬라이드업slideup--슬라이드다운slidedown)
    - [명령: 스크롤(scroll)](#명령-스크롤scroll)
    - [명령: 스톱(stop)](#명령-스톱stop)
      - [애니메이션 대기열 모두 지우기](#애니메이션-대기열-모두-지우기)
    - [명령: 피니쉬(finish)](#명령-피니쉬finish)
    - [명령: 리버스(reverse)](#명령-리버스reverse)
</details>

<br>
<br>

jQuery는 훌륭한 문서객체모델(DOM) 라이브러리지만, 애니메이션 처리 속도가 느립니다. jQuery의 느린 애니메이션을 보완할 라이브러리로 [VelocityJS](http://velocityjs.org/)를 사용해봅시다<i>!</i>

<img src="../../ASSETS/velocityjs-logo.png" alt="GreenSock" align="left" width="180" height="170">

VelocityJS는 jQuery `.animate()` 와 동일한 API를 제공하는 애니메이션 엔진으로 jQuery 없이도 작동합니다.
jQuery `.animate()`와 달리, 매우 빠르고 컬러(Color), 트랜스폼(Transform), 반복(Loop), 이징(easings), 스크롤(Scroll), SVG 애니메이션 등 다양한 기능을 지원합니다.

VelocityJS의 초고속 애니메이션 비밀은 DOM과 트윈스택(Tween Stack)을 동기화하고 값을 캐싱하여 DOM 쿼리를 최소화하고, 하드웨어 가속을 사용함에 있습니다.

<br>

### VelocityJS를 사용해야 하는 이유

1. **빠릅니다**.<br>
  VelocityJS는 CSS만큼 빠른 속도를 자랑하며, 특히 모바일 장치에서 jQuery 보다 우수한 성능을 제공합니다.<br>
  브라우저 지원 면에서 제약이 있는 CSS 애니메이션과 달리 VelocityJS는 IE 8+ 지원합니다.
1. **쉽습니다**<br>
  VelocityJS는 jQuery 애니메이션과 유사한 구문을 제공합니다.<br>
  jQuery를 사용하고 있다면 VelocityJS도 쉽게 사용할 수 있습니다.
1. **RunSequence**<br>
  `RunSequence`는 연속적으로 애니메이션 스택을 수행하는데 사용할 수 있는 VelocityJS의 메소드입니다.<br>
  jQuery처럼 `.animate()`를 연이어 실행하는 것보다 세련된 접근 방식입니다.<br>
  CSS만으로는 이와 같은 일을 수행할 수 없죠.

<br>
<br>

### 1. 파일 다운로드 및 CDN 로드

[velocity@1.5.0.min.js](https://unpkg.com/velocity-animate@1.5.0/velocity.min.js) 파일 다운로드

```html
<script src="https://unpkg.com/velocity-animate"></script>
```

---

### 2. 기본 사용법

#### 2-1. jQuery와 VelocityJS 사용하기

jQuery와 함께 Velocity를 사용하면 모바일을 포함한 모든 기기에서 애니메이션 성능이 향상됩니다.
jQuery의 `.animate()` 대신 `.velocity()`를 사용할 수 있고, `.delay()`, `.stop()` 메서드도 사용 가능합니다.

##### jQuery, VelocityJS 애니메이션 설정 코드는 매우 유사

```js
// jQuery
$('.element').animate({
  opacity: 0.5
}, {
  duration: 0.4,
  easing: 'linear'
});
```

```js
// VelocityJS
$('.element').velocity({
  opacity: 0.5
}, {
  duration: 0.4,
  easing: 'linear'
});
```

> VelocityJS를 사용하면 jQuery 애니메이션 루틴을 대체합니다.
> VelocityJS가 대신하는 애니메이션 기능을 제외한 jQuery 파일을 빌드하려면 [jQuery 커스텀 빌드](../../Documentation/custom-jQuery.md)를 참고하여 빌드해보세요.

#### 2-2. jQuery 없이 VelocityJS 사용하기

VelocityJS는 jQuery 없이도 작동합니다. jQuery 없이 VelocityJS를 사용하면 IE 8 이하 버전은 지원하지 않게 됩니다. (IE 9+)

jQuery나 [Zepto](http://zeptojs.com/) 라이브러리 없이 VelocityJS를 사용하면 window 객체의 속성으로 Velocity를 사용할 수 있습니다.

`Velocity` 유틸리티 함수를 통해 트리거 되며 첫번째 전달인자로 DOM 요소를 전달하고, 두번째는 전달인자 이후는 `.velocity()` 사용법과 동일합니다.

```js
Velocity(document.querySelector(".element"), { opacity: 0.5 }, { duration: 1000 });
```

> 참고로 jQuery, Zepto 없이 VelocityJS 만 사용할 경우, `.delay()`, `.queue()` 메서드를 함께 사용할 수 없습니다.

### 3. jQuery VS VelocityJS 코드 비교

#### 3-1. CSS 속성 애니메이션

jQuery는 `width`, `height`, `left` 와 같은 CSS 속성은 애니메이션이 가능하지만, `background-color`, `color`와 같은 컬러 속성은 [jquery.color](https://github.com/jquery/jquery-color) 플러그인이 필요합니다.

```js
// jQuery
// jquery.color.js 플러그인 확장이 없으면 작동하지 않습니다.
$(".element").animate({
  'background-color': 'red'
});
```

반면 VelocityJS는 CSS의 모든 속성을 애니메이션 할 수 있으며, CSS3 Transform, Box Shadow 와 같은 기술도 사용 가능합니다.<br>
CSS 속성이름은 JavaScript 작명 규칙에 따라 camelCase 방식을 사용해야 합니다.

```js
// VelocityJS
$(".element").velocity({
  width: "45px",
  borderRadius: "25px",
  borderColor: "#8CC152",
  paddingLeft: "0",
  paddingRight: "0",
  backgroundColor: "#8CC152",
  color: "#fff",
  boxShadowX: "0",
  boxShadowY: "0"
}, {
    duration: 350
});
```

#### 3-2. VelocityJS로 slide, Fade 사용하기

jQuery `.slideUp()`, `.slideDown()`, `.fadeIn()`, `.fadeOut()`를 `.velocity()`에서 사용하려면 약간 사용법이 다릅니다.

```js
// jQuery
$(".element")
  .slideUp()
  .delay(800)
  .slideDown()
  .fadeOut(450)
  .delay(800)
  .fadeIn(600);
```

`.velocity()` 메서드의 첫번째 인자로 'slideUp', 'slideDown', 'fadeIn', 'fadeOut' 키워드를 사용합니다.

```js
// VelocityJS
$(".element")
  .velocity('slideUp')
  .delay(800)
  .velocity('slideDown')
  .velocity('fadeOut', 450)
  .delay(800)
  .velocity('fadeIn', 600);
```

#### 3-3. VelocityJS로 slideToggle 구현하기

jQuery `.slideToggle()` 메서드를 사용하여 드롭 메뉴를 만들거나, 다른 요소를 슬라이드 토글(보임/감춤) 할 수 있습니다.

```js
// jQuery
var $el     = $('.element');
var $target = $('.target');

$el.on('click', function() {
  $target.slideToggle();
});
```

하지만 VelocityJS는 기본적으로 `slideToggle` 메서드를 지원하지 않습니다. 하지만 약간의 코드를 추가하여 구현할 수 있습니다.
코드 양은 증가 했지만, jQuery `slideToggle` 눈에 띄게 성능이 향상됩니다. 뿐만 아니라, $target 요소의 보임/감춤 상태에 따라
다양한 옵션(예 : 지연(delay), 지속시간(duration), 종료(complete) 콜백 등)을 설정할 수 있습니다.

```js
// VelocityJS
$el.on('click', function() {

  var is_visible = $target.is(':visible');
  var method = is_visible ? 'slideUp' : 'slideDown';
  var time = is_visible ? 240 : 380;

  $target.velocity(method, {
    delay: 160,
    duration: time,
    easing: 'easeOutQuart',
    complete: function(){ ... }
  });

});
```

### 4. VelocityJS 오리지널 기능

#### 4-1. VelocityJS 스크롤 애니메이션

VelocityJS는 페이지의 특정 섹션으로 연결되는 앵커 스크롤 애니메이션 기능을 제공합니다.

```js
var $document = $('body');
var $btn      = $('.btn.go-down');

$btn.on('click', function() {
  $document.velocity('scroll', {
    duration: 450,
    easing: 'easeInExpo'
  });
});
```

#### 4-2. VelocityJS 리버스(reverse) 애니메이션

`reverse` 키워드를 사용하면 애니메이션이 종료된 후, 역방향으로 다시 재생됩니다. 그리고 애니메이션 옵션으로 `loop` 설정 값을 `true`로 적용하면 애니메이션은 반복됩니다.

```js
$('.icon')
  .velocity({
    translateY: '10px'
  }, {
    loop: true
  })
  .velocity('reverse');
```

### 4. UI Pack

VelocityJS를 확장하는 플러그인으로 보다 많은 애니메이션 효과를 사용할 수 있습니다. UI 팩은 2가지 새로운 옵션을 제공합니다.

- `stagger`
- `drag`

`stagger`는 __어긋나게 배치__ 하는 의미로 일련의 애니메이션을 순차적으로 실행되도록 만듭니다.<br>
`drag` 옵션 값이 `true`로 설정되면 마지막 요소에서 끌 수 있습니다.

#### 4-1. 파일 다운로드 및 CDN 로드

[velocity-ui-pack@1.2.2.min.js](https://unpkg.com/velocity-ui-pack@1.2.2/velocity.ui.min.js) 파일을 다운로드

```html
<script src="https://unpkg.com/velocity-animate"></script>
<script src="https://unpkg.com/velocity-ui-pack"></script>
```

#### 4-2. stagger 옵션을 사용한 순차 애니메이션

하위 메뉴를 포함하는 메뉴 컴포넌트가 있다면, 보다 멋진 애니메이션 효과를 적용하기 위해 `stagger` 옵션을 설정할 수 있습니다.

```js
var $menu = $('.has-submenu');

$menu.on('click', function() {
  var $subMenu     = $menu.children('ul');
  var $subMenuItem = $subMenu.children('li');

  if ( !$subMenu.hasClass('on-view') ) {
    $subMenu.addClass('on-view');
    // 서브메뉴(ul) 슬라이드다운인 트랜지션
    $subMenu.velocity('transition.slideDownIn', {
      duration: 200
    });
    // 서브메뉴 아이템(li) 익스펜드인 트랜지션
    $subMenuItem.velocity('transition.expandIn', {
      delay: 200,
      duration: 300,
      stagger: 100,
    });
  } else {
    $subMenu.removeClass('on-view');
    // 역재생
    $subMenu.add($subMenuItem).velocity('reverse');
  }
});
```

### 5. 애니메이션 시퀀스

때때로 각기 다른 요소가 순차적으로 애니메이션 되어야 하는 경우도 있습니다. 그러한 경우 일반적으로 아래와 같이 코딩합니다.
코드가 보기 안 좋군요. 콜백 함수를 수차례 사용하여 순차적으로 코드를 실행해야 하니 읽기도 불편하고, 관리하기도 용이하지 않습니다.
생각해보세요. 동시에 10개 이상의 다른 요소를 순차적으로 애니메이션 설정해야 한다면 악몽이겠죠! 생각하기도 싫네요.

```js
$(".offcanvas")
  .velocity(
    {
      translateX: 0
    },
    {
      duration: 300,
    },
    // #1 애니메이션 완료 후, 콜백
    function() {
      $('.widgets')
        .velocity({
          translateX: 0,
          opacity: 0
        },
        {
          duration: 300
        },
        // #2 애니메이션 완료 후, 콜백
        function(){
          $('.close')
            .velocity({
              translateY: 0,
              translateZ: 0
            },
            {
              duration: 200
            });
        });
    }
  );
```

VelocityJS가 제공하는 `RunSequence` 메서드는 이러한 애니메이션 시퀀스를 손쉽게 제어하기 용이하도록 설계되었습니다.
애니메이션이 쌓인 순서대로 실행됩니다. 메서드 사용 방법은 다음과 같습니다.

```js
var offcanvas_sequence = [
  // #1 --------------------
  {
    // element
    e: $('.offcanvas'),
    // properties
    p: { translateX: 0 },
    // options
    o: { duration: 300 }
  },
  // #2 --------------------
  {
    e: $('.widgets'),
    p: {
      translateX: 0,
      opacity: 0
    },
    o: { duration: 300 }
  },
  // #3 --------------------
  {
    e: $('.close'),
    p: {
      translateY: 0,
      translateZ: 0
    },
    o { duration: 200 }
  }
];


$.Velocity.RunSequence(offcanvas_sequence);
```

---

# 레퍼런스

## 기본

### 기본: 전달인자

VelocityJS는 첫번째 전달인자로 CSS 속성 및 값(Object)을 전달합니다. 옵션 객체는 두번째 인자로 전달할 수 있습니다.

```js
$('.element').velocity(
  // CSS 속성맵은 필수
  {
      속성1: 속성1 값,
      속성2: 속성2 값,
      ...
  },
  // 옵션은 선택으로 생략 가능
  {
      옵션1: 옵션1 값,
      옵션2: 옵션2 값,
      ...
  }
);
```

#### 기본: 옵션 재정의 - 기본 옵션

VelocityJS 기본 옵션은 다음과 같으며, 기본 옵션을 변경하고자 할 경우, `$.Velocity.defaults` 값을 변경하면 적용됩니다.

```js
// $.Velocity.defaults 값의 일부를 변경하면, 기본 옵션 재정의
$.Velocity.defaults = {
  // 지속시간
  duration: 400,
  // 이징
  easing: "swing",
  // 대기열(큐)
  queue: "",
  // 시작할 때, 실행(1회)되는 콜백 함수
  begin: undefined,
  // 진행 중일 때, 실행되는 콜백 함수
  progress: undefined,
  // 완료 후, 실행(1회)되는 콜백 함수
  complete: undefined,
  // 애니메이션 종료 후, 설정: display 값
  display: undefined,
  // 애니메이션 종료 후, 설정: visibility 값
  visibility: undefined,
  // 반복
  loop: false,
  // 지연시간
  delay: false,
  // 모바일 하드웨어 가속
  mobileHA: true
};
```

#### 기본: 전달인자 - 1개의 객체 설정

VelocityJS는 전달인자로 1개의 객체를 전달하는 문법을 지원합니다.

`.velocity()` 메서드에 하나의 객체를 설정한 후, 아래와 같이 속성(properties), 옵션(options)을 속성으로 하는 값을 설정할 수 있습니다.

```js
$('.element').velocity({
  properties: { translateX: '+=20' },
  options: { duration: 450 }
});
```

속성(properties)을 `p`, 옵션(options)을 `o`로 축약 설정도 가능합니다.

```js
$('.element').velocity({
  p: { translateX: '+=20' },
  o: { duration: 450 }
});
```

1개 객체 전달인자 설정이 아닌 방법은 jQuery `.animate()` 메서드와 동일합니다. 쉼표(`,`)로 구분

> 속성맵(PropertyMap)을 제외한 나머지 옵션은 순서에 상관 없이 잘 작동합니다.

```js
// $().velocity(PropertyMap [, duration] [, easing] [, complete]);

// 속성맵(객체)만 설정한 경우
$('.element').velocity({left: '20px'});

// 속성맵(객체), 지속시간을 설정한 경우
$('.element').velocity({left: '20px'}, 420);

// 속성맵(객체), 이징을 설정한 경우
$('.element').velocity({left: '20px'}, 'easeInSign');

// 속성맵(객체), 지속시간, 완료 후 콜백함수를 설정한 경우
$('.element').velocity({left: '20px'}, 420, function(){ ... });
```

### 기본: 속성맵

VelocityJS는 속성마다 하나의 숫자 값을 애니메이션으로 설정합니다.

```js
{ padding: 10 }
```

하지만 아래와 같은 방법은 사용할 수 없습니다.

```js
{ padding: '10 20 0 5' }
```

세부 속성을 설정해야 합니다.

```js
{
  paddingTop: 10,
  paddingRight: 20,
  paddingBottom: 0,
  paddingLeft: 5,
}
```

#### 기본: 단위

`px`, `em`, `rem`, `%`, `deg` 및 `vw`/`vh` 단위를 지원합니다. 단위를 설정하지 않으면 기본적으로 `px`이 설정됩니다.<br>
하지만 `rotateZ` 속성은 자동으로 `deg` 단위가 설정됩니다. 뿐만 아니라 `+`, `-`, `*`, `/` 4칙 연산자도 지원합니다.

```js
$('.element').velocity({
  top: 50,         // 자동으로 px 단위 처리
  left: "50%",
  width: "+=5rem", // 현재 rem 단위에 상대적으로 5rem 증가
  height: "*=2"    // 현재 높이의 2배 만큼 상대적으로 증가
});
```
> `rem` 단위는 IE 9 이하에서 지원되지 않습니다. `vh`/`vw` 단위는 IE 9 이하 또는 Android 4.4 미만에서 지원되지 않습니다.

### 기본: 체이닝

`.velocity()` 호출이 연속해서 쌓이면 자동으로 대기열(큐, `queue`)에 대기됩니다. 이전 애니메이션이 완료되면 다음 애니메이션이 실행됩니다.

```js
$('.element')
    /* #1 애니메이션 실행 */
    .velocity({ width: 75 })
    /* #1 애니메이션이 종료되면, #2 애니메이션 실행 */
    .velocity({ height: 0 });
```

## 옵션

## 옵션: 지속시간(duration)

## 시간 별칭

jQuery와 마찬가지로 자주 사용되는 밀리초 값에 대한 별칭(Alias)을 다음과 같이 제공합니다.

시간(밀리초) | 별칭
---------- | ----
200 | 'fast'
400 | 'normal'
600 | 'slow'

```js
$('.element').velocity({ opacity: 1 }, { duration: 600 });

// 동일

$('.element').velocity({ opacity: 1 }, { duration: 'slow' });
```

### 옵션: 이징(Easing)

VelocityJS는 다양한 이징 설정을 제공합니다. (IE 8+)

```js
/* jQuery UI 이징 */
$('.element').velocity({ left: 100 }, 'easeInCubic');

/* CSS 베지어 커브 */
$('.element').velocity({ left: 100 }, [ 0.17, 0.67, 0.83, 0.67 ]);

/* 스프링 물리학 */
$('.element').velocity({ left: 100 }, [ 250, 15 ]); // tension, friction

/* 스텝 이징 */
$('.element').velocity({ left: 100 }, [ 8 ]); // 8 step
```

설정 가능한 값은 아래 표를 참고하세요. (► 토글)

<details>
  <summary><code>.velocity()</code>에 설정 가능한 이징 값</summary>
  <br>

  유형 | 이징 값 | 비고
  --- | --- | ---
  CSS3 | 'ease' |
  | | 'ease-in' |
  | | 'ease-out' |
  | | 'ease-in-out' |
  | | [ 0.17, 0.67, 0.83, 0.67 ] | [cubic-bezier.com](http://cubic-bezier.com) 참고
  jQuery UI | 'easeInSign' | [easings.net](http://easings.net/ko) 참고
  | | 'easeOutSign' |
  | | 'easeInOutSign' |
  | | 'easeInQuad' |
  | | 'easeOutQuad' |
  | | 'easeInOutQuad' |
  | | 'easeInCubic' |
  | | 'easeOutCubic' |
  | | 'easeInOutCubic' |
  | | 'easeInQuart' |
  | | 'easeOutQuart' |
  | | 'easeInOutQuart' |
  | | 'easeInQuint' |
  | | 'easeOutQuint' |
  | | 'easeInOutQuint' |
  | | 'easeInExpo' |
  | | 'easeOutExpo' |
  | | 'easeInOutExpo' |
  | | 'easeInCirc' |
  | | 'easeOutCirc' |
  | | 'easeInOutCirc' |
  | | | Back, Elastic, Bounce 계열은 미지원
  Spring Physics | [tension(긴장), friction(마찰)] | [Spring Physics](https://codepen.io/julianshapiro/pen/hyeDg) 참고
  | | | 긴장(tension,기본값: 500)은 속도와 탄력을 증가시킵니다.<br>마찰(friction, 기본값: 20)은 종료 시 진동 속도를 증가시킵니다.
  Step Easing | [step] | [step-easing](https://css-tricks.com/clever-uses-step-easing/) 참고
</details>

#### 옵션: 속성 별 개별 이징

이징 속성 값을 배열을 전달하여 속성 단위 별로 정의할 수 있습니다.<br>
첫번째 아이템은 표준 속성(종료) 값이고, 두 번째 아이템은 이징 유형입니다.


```js
$('.element').velocity({
    borderBottomWidth: [ '2px', 'spring' ], // 스프링 물리학 기본값 [500, 20] 사용
    width: [ '100px', [ 250, 15 ] ],        // 사용자 정의 스프링 물리학 사용
    height: '100px'                         // 기본 이징(easeInSine) 사용
}, {
    easing: 'easeInSine'                    // 기본 이징
});
```

> jQuery의 `.animate()`와 마찬가지로 'swing'은 VelocityJS 기본 이징입니다.

### 옵션: 사용자 정의 이징(고급)

VelocityJS에서 사용 가능한 자신만의 이징 함수를 등록하려면 `$.Velocity.Easings` 객체를 확장합니다.

- `p`: 백분율(%, 10진수 값)
- `opts` (옵션): 트리거하는 Velocity 호출에 전달 된 옵션 개체
- `tweenDelta` (옵션): 애니메이션 속성의 끝 값과 시작 값 간의 차이

```js
$.Velocity.Easings.myCustomEasing = function (p, opts, tweenDelta) {
  return 0.5 - Math.cos( p * Math.PI ) / 2;
};
```

### 옵션: 대기열(큐, queue)

#### 병렬(parallals) 애니메이션

대기열(queue)을 `false`로 설정하면 진행 중인 애니메이션과 병렬로 애니메이션을 실행시킬 수 있습니다.

```js
var $el = $('.element');

$el.velocity({left: 20}, 4000); // 4초 동안 왼쪽 방향으로 이동

window.setTimeout(function() {
  // 1초 뒤에
  // 아래 방향으로 동시 이동
  $el.velocity({top: 40}, {queue: false});
}, 1000);
```

`dequeue()`를 사용하여 대기열에 등록된 애니메이션을 추후 실행시킬 수도 있습니다.

```js
var $el = $('.element');

$el
  .velocity({left: 100}, {queue: 'a'})
  .velocity({left: -100}, {queue: 'b'})
  .velocity({top: 100}, {queue: 'a'})
  .velocity({top: -100}, {queue: 'b'});

// 1초 뒤에 대기열 'a'에 등록된 애니메이션 실행
window.setTimeout(function() {
  $el.dequeue('a');
}, 1000);

// 2초 뒤에 대기열 'b'에 등록된 애니메이션 실행
window.setTimeout(function() {
  $el.dequeue('b');
}, 2000);
```

> `loop`, `reverse` 옵션을 설정하면 병렬 애니메이션이 올바르게 작동하지 않습니다.

### 옵션: 시작/진행/종료 콜백 함수

#### 시작(Begin)

애니메이션 시작 지점에서 1회 콜백함수가 실행합니다. (`loop` 설정이 있더라도 1회만 실행)

```js
$('.element').velocity({
    opacity: 0
}, {
  // 애니메이션 시작 지점에서 콜백 함수 실행
  begin: function(elements) { console.log(elements); }
});
```

#### 종료(Complete)

애니메이션 종료 지점에서 1회 콜백함수가 실행합니다. (`loop` 설정이 있더라도 1회만 실행)

```js
$('.element').velocity({
    opacity: 0
}, {
  // 애니메이션 종료 지점에서 콜백 함수 실행
  complete: function(elements) { console.log(elements); }
});
```

#### 진행(Progress)

애니메이션 진행 중에 반복적으로 콜백함수가 실행합니다.

- `complete`: 완료 백분율(십진수 값)
- `remaining`: 완료 될 때까지 남은 시간(밀리 초)
- `start` : 호출이 시작된 절대 시간(유닉스 시간)
- `tweenValue` : 트윈 애니메이션 속성 현재 값

```js
$('.element').velocity({
    opacity: 0
}, {
  // 애니메이션 진행 중에 콜백 함수 실행
  progress: function(elements, complete, remaining, start, tweenValue) {
    console.log('현재 진행율:', (complete * 100) + '%');
    console.log('남은 시간(밀리초):', remaining + 'ms');
    console.log('현재 트윈 값:', tweenValue)
  }
});
```

### 옵션: 모바일 하드웨어 가속

`mobileHA`는 모바일 하드웨어 가속을 말합니다. `true`(기본값)로 설정된 경우, 모바일 기기에서 자동으로 하드웨어 가속됩니다.

```js
$('.element').velocity({
  opacity: 1
}, {
  mobileHA: true // 기본 값
});
```

> 모바일 브라우저는 하드웨어 가속(HA)에서 크게 이익을 얻지만 데스크톱 브라우저는 그렇지 않습니다.<br>
> 결론적으로 `mobileHA`는 데스크톱 브라우저에는 영향을 미치지 않습니다.<br>
> 만약 문제가 발생할 경우, 값을 `false`로 설정한 후 테스트 해봅니다.

### 옵션: 루프(Loop)

반복 횟수(정수)를 설정하거나, 무한 반복 시킬 수 있습니다.

```js
$('.element').velocity({ height: "10em" }, { loop: 2 }); // 2회 반복 후, 애니메이션 종료
```

정수 대신 `true` 값을 설정하면 무한 반복됩니다.

```js
$('.element').velocity({ height: "10em" }, { loop: true }); // 무한 반복 애니메이션
```

> 반복을 멈추려면 `.velocity('stop')` 메서드를 사용합니다.

### 옵션: 지연시간(delay)

애니메이션 시작 전에 일시정지를 설정하려면 `delay` 옵션을 밀리초(ms) 단위로 설정합니다.

```js
$('.element').velocity({
    height: "+=10em"
}, {
    loop: 4,
    // 100ms, 0.1s 뒤에 애니메이션 실행
    delay: 100
});
```

### 옵션: 디스플레이(display) & 비져빌리티(visibility) 설정

#### 소개

VelocityJS의 `display` 및 `visibility` 옵션은 애니메이션 종료 후, CSS 속성으로 설정됩니다.

`display` 값은 `'inline'`, `'inline-block'`, `'block'`, `'flex'`, `''`(빈 공백 문자열 값은 완전한 속성 제거) 및 브라우저가 지원하는 네이티브 속성 값을 모두 사용할 수 있습니다.

`visibility`는 `'hidden'`, `'visible'`, `'collapse'`, `''`(빈 공백 문자열 값은 완전한 속성 제거)을 사용할 수 있습니다.

##### CSS `display`, `visibility` 속성 설정에 따른 차이점

- __접힘(collapse)__: 일반적으로 차지하는 공간을 축소합니다.
- __이벤트(events)__: 이벤트(예: `click`, `keydown`) 처리가 가능합니다.
- __탭 오더(tab order)__: 탭 순서(초점 이동, 접근성)를 사용할 수 있습니다.

| | 접힘(collapse) | 이벤트(events) | 탭 오더(tab order)
---|---|---|---
`opacity: 0`           |   No  |   Yes  |   Yes
`visibility: hidden`   |   No  |   No   |   No
`visibility: collapse` |   *   |   No   |   No
`display: none`        |  Yes  |   No   |   No

> * 테이블 요소 내에서는 Yes, 그 외는 No.

`display` 값으로 비표준 값인 `'auto'`를 사용하면 VelocityJS는 요소가 가진 기본 display 값을 설정합니다.<br>
예를 들어 `<a>` 요소는 브라우저 기본 `display` 값이 `'inline'`이고, `<div>`는 `'block'` 입니다.

#### 사용법

`display` 옵션 값이 `'none'`(또는 `visibility` 값이 `'hidden'`으로 설정된 경우)으로 설정 되면, 애니메이션이 완료된 후에 CSS 속성 값으로 설정 됩니다.

이러한 설정은 애니메이션이 완료되면 요소를 숨기고, 요소의 불투명도(opacity)를 `0`으로 애니메이팅 할 때 유용합니다.
루프(`loop`) 옵션과 함께 사용할 경우는 루프 반복이 끝날 때 최종적으로 설정됩니다.

요소가 페이드아웃(fade-out)되면 페이지에서 요소가 제거(공간이 없어짐)됩니다. 이는 jQuery의 `.fadeOut()` 메서드와 같다고 볼 수 있다.

```js
/* 요소의 불투명도가 0으로 애니메이션된다. 애니메이션이 완료되면 display 값을 'none'으로 설정 */
$('.element').velocity({ opacity: 0 }, { display: 'none' });
```

반면 애니메이션 종료 후, `visibility` 값을 설정하면 보이지는 않지만, 페이지에서의 공간은 유지 됩니다.

```js
/* 요소의 불투명도가 0으로 애니메이션된다. 애니메이션이 완료되면 visibility 값을 'hidden'으로 설정 */
$('.element').velocity({ opacity: 0 }, { visibility: 'hidden' });
```

반대로 `display` / `visibility` 값을 `'none'` / `'hidden'`이 아닌 값(예: `'block'` / `'visible'`)으로 설정할 경우,
애니메이션이 시작 되기 전에 해당 값이 설정되어 애니메이션 됩니다.

```js
/* display 값을 'block'으로 설정된 후, 요소의 불투명도가 1로 애니메이션된다. */
$('.element').velocity({ opacity: 1 }, { display: 'block' });
```

## 명령

### 명령: 페이드(fade) & 슬라이드(slide)

#### 동작(Behavior) 방법

페이드(fade), 슬라이드(slide) 명령은 대상 요소의 `display` 속성을 자동으로 설정하여 요소를 표시하거나 숨깁니다.
기본적으로 요소를 표시할 때 `display`는 요소가 가진 기본 값으로 설정됩니다.(`<div>`는 `'block'`으로 설정. `<span>`은 `'inline'`으로 설정 됨)

```js
/* 페이드인 애니메이션이 종료되면 display 값을 요소의 기본 값으로 설정 */
$('.element').velocity('fadeIn');
```

별도로 사용자가 원하는 값으로 설정하고자 한다면 아래 예제와 같이 설정 가능합니다.

```js
/* 페이드인 애니메이션이 종료되면 display 값을 'table'로 설정 */
$('.element').velocity('fadeIn', { display: 'table' });
```

#### 페이드인(fadeIn) / 페이드아웃(fadeOut)

페이드인(fadeIn), 페이드아웃(fadeOut) 사용법

```js
$('.element')
  // 요소가 1.5s 동안 서서히 보여진다.
  .velocity('fadeIn', { duration: 1500 })
  // 0.5s 동안 애니메이션이 지연된 후, 1.5s 동안 서서히 사라진다.
  .velocity('fadeOut', { delay: 500, duration: 1500 });
```

#### 슬라이드업(slideUp) / 슬라이드다운(slideDown)

슬라이드업(slideUp), 슬라이드다운(slideDown) 사용법

```js
$('.element')
  // 1.5s 동안 아래 방향으로 슬라이드되어 보여진다.
  .velocity('slideDown', { duration: 1500 })
  // 0.5s 동안 애니메이션이 지연된 후, 1.5s 동안 위 방향으로 슬라이드되어 사라진다.
  .velocity('slideUp', { delay: 500, duration: 1500 });
```

### 명령: 스크롤(scroll)

스크롤(scroll) 사용법

```js
$('.element')
  // 요소를 1.5s 동안 스프링 이징(`[500,20]`)을 적용하여 스크롤 애니메이션 합니다.
  .velocity('scroll', { duration: 1500, easing: 'spring' })
  // 이전 애니메이션이 종료되면, 서서히 사라지는 애니메이션을 진행합니다.
  .velocity({ opacity: 0 });
```

특정 요소의 내부에 있는 요소에 스크롤 애니메이션을 설정하려면, `container` 옵션으로 고유한 특정 요소를 설정해야 합니다. (jQuery 객체 또는 DOM 객체 설정 가능)

> 특정 요소는 반드시 `position` 값이 `static`이 아닌 값으로 설정되어야 합니다. 그렇지 않으면 애니메이션 되지 않습니다.

```css
#target {
  ...
  position: relative;
  ...
}
```

```js
/* $('#target') 내부의 $('.element') 위치로 스크롤 애니메이션 됩니다. */
$('.element').velocity('scroll', { container: $('#target') });
```

기본적으로 스크롤 애니메이션은 Y축으로 진행됩니다. X축으로 진행되게 설정하려면 아래와 같이 설정합니다.

```js
/* X축으로 스크롤 하려면 axis 옵션 값으로 'x'를 설정해야 합니다. */
$('.element').velocity('scroll', { axis: 'x' });
```

픽셀(pixel) 단위로 설정된 `offset` 옵션을 사용하면 상대적인 스크롤 위치 애니메이션이 가능합니다.

```js
$('.element')
  /* 해당 요소의 아래 방향에 상대적으로 250px 만큼 스크롤 애니메이션 됩니다. */
  .velocity('scroll', { duration: 750, offset: 250 })
  /* 해당 요소의 위 방향에 상대적으로 50px 만큼 스크롤 애니메이션 됩니다. */
  .velocity('scroll', { duration: 750, offset: -50 });
```

요소가 아닌 브라우저 창을 대상으로 스크롤 애니메이션 하려면 `html` 요소를 대상으로 설정하고 사용자 지정 `offset` 값을 사용합니다.

> iOS에서 깜박 거리는 문제가 발생하면 `mobileHA`: `false` 값을 사용합니다.

```js
/* 브라우저 페이지를 대상으로 임의의 offset 설정 값으로 스크롤 애니메이션 진행 */
$('html').velocity('scroll', { offset: 550 });

/* iOS에서 깜빡 거릴 경우, mobileHA: false 값을 설정 */
$('html').velocity('scroll', { offset: 550, mobileHA: false });
```

### 명령: 스톱(stop)

요소에 대해 현재의 모든 VelocityJS 호출(`queue`를 통해 호출된 병렬 애니메이션 포함)을 즉시 중지하려면 `.velocity()` 메서드의 1번째 인자로 `'stop'`을 전달합니다.

```js
$('.element').velocity('stop'); // 일반적인 스톱(stop)
```

사용자 정의 대기열(큐)을 중지 하려면 대기열의 이름을 2번째 인자로 전달합니다.

```js
$('.element').velocity('stop', 'myQueue'); // 설정된 큐(대기열)에 등록된 애니메이션 스톱(stop)
```

애니메이션 진행 중에 중단한 후 다시 복귀하는 일반적인 패턴은 `stop`한 다음, `reverse` 명령을 사용하여 시작 값으로 다시 애니메이션하는 것입니다.

```js
var $el = $('.element');

// 설정된 애니메이션
$el.velocity({ opacity: 0 }, 3000);

// 중단을 설정한 후, 복귀하고자 한다면
$el
  /* opacity: 0 애니메이션 중지 */
  .velocity('stop')
  /* opacity: 1 값으로 다시 복귀 애니메이션 진행 */
  .velocity('reverse');
```

#### 애니메이션 대기열 모두 지우기

```js
var $el = $('.element');

// 설정된 애니메이션
$el
  .velocity({ width: 100 }, 1000)
  .velocity({ height: 200 }, 1000);

/* 모든 대기열에 쌓인 애니메이션을 즉시 중지 */
/* { width : 100 } 호출이 즉시 중지되고, 그 다음 애니메이션 { height : 200 }이 제거되고 완전히 건너 뜁니다. (실행되지 않습니다) */
$el.velocity("stop", true);
```

### 명령: 피니쉬(finish)

애니메이션의 끝으로 바로 이동하려면 `.velocity()` 메서드의 1번째 인자로 'finish'를 전달하여 종료 명령을 사용합니다.

```js
$('.element').velocity('finish');
```

`stop` 명령은 애니메이션을 갑작스럽게 중단하고 애니메이션 속성을 그 상태 그대로 정지한 반면, `finish` 명령은 애니메이션의 최종 속성 값으로 설정 적용합니다.
다시 말해 `finish` 명령은 애니메이션 호출의 마지막 프레임으로 즉시 점프하는 수단으로 생각하면 이해하기 쉽습니다.

### 명령: 리버스(reverse)

요소를 이전의 값으로 다시 복귀하는 애니메이션을 설정하려면 `.velocity()` 메서드의 1번째 인자로 `'reverse'`를 전달합니다.

```js
$('.element').velocity("reverse");
```

`reverse`는 이전에 설정된 애니메이션 옵션(`duration`, `easing` 등)을 그대로 사용합니다. 설정을 변경하여 리버스 하려면 새로운 옵션 객체를 2번째 인자로 전달하여 재정의 할 수 있습니다.

```js
$('.element').velocity("reverse", { duration: 2000 });
```