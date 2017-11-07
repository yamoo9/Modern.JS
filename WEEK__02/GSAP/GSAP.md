# GreenSock Library

<img src="../../ASSETS/greensock.png" alt="GreenSock" align="right">

TweenLite는 가볍고 빠르고 유연한 애니메이션 도구 GreenSock 애니메이션 플랫폼(GSAP)이다.
TweenLite 인스턴스는 객체(또는 객체 배열)의 속성에 트위닝을 처리한다.
TweenLite는 작은 파일 크기로 애니메이션 작업을 수행하는 데 필요한 대부분을 지원한다.
보다 복잡한 작업을 수행할 경우에는 TimelineMax와 같은 고급 시퀀싱 도구를 함께 사용하며,
타임라인 제어는 TimelineLite, TimelineMax를 활용한다.

[GSAP](https://greensock.com/gsap)

<!--
#### Tutorials
- [Get Started: GSAP JS](https://greensock.com/get-started-js)
- [Jump Start: GSAP JS](https://greensock.com/jump-start-js)
-->

---

### 1. CDN 파일 로드

[GSAP × CDN](https://cdnjs.com/libraries/gsap)



```html
<!-- 필수: TweenLite Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenLite.min.js"></script>
<!-- 옵션: CSS Plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/plugins/CSSPlugin.min.js"></script>
<!-- 옵션: EasePack -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/easing/EasePack.min.js"></script>

<!-- —————————————————————————————————————————————————————————————————————————————————————————— -->

<!-- TweenMax: 모두 포함 버전 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
```



---

### 2. 기본 사용법

- [TweenLite Documentation](https://greensock.com/docs/#/HTML5/GSAP/TweenLite/)
- [TweenMax Documentation](https://greensock.com/docs/#/HTML5/GSAP/TweenMax/)

##### TweenLite 메서드

- `.to()`     : 설정 값이 끝(to) 설정이 된다.
- `.from()`   : 설정 값이 시작(from) 설정이 된다.
- `.fromTo()` : 설정1 값이 시작(from), 설정2 값이 끝(to) 설정이 된다.
- `.set()`    : 설정 값이 초기(initial) 설정이 된다.

##### Code


```js
// TweenLite 인스턴스 메서드
//    .to(), .from(), .fromTo(), .set()
// TweenLite.to(문서객체요소, 시간(초), {속성});
//    속성: x, y, opacity

// 문서객체 변수에 참조
var brand = document.querySelector('.brand'); // $('.brand');

// 문서객체에 TweenLite 트위닝 설정 —————————————————————————————— //

// .to()
TweenLite.to( brand , 0.45, {x: 300} );

// .from()
TweenLite.from( brand , 1, {x: -300} );

// .fromTo()
TweenLite.fromTo( brand , 1.2, {x: -300}, {x: 300} );

// .set()
TweenLite.set( brand , {y: -20} );

// .from() + autoAlpha + delay
// 1초 뒤에 1초 동안 alpha 값을 자동 설정(0에서 시작)
TweenLite.from( brand, 1, { autoAlpha: 0, delay: 1 });
```


###### authoAlpha 속성


GSAP에서 제공하는 특별한 속성으로 `opacity` + `visibility`를 하나로 합친 속성이다.
autoAlpha 속성 값 0 설정이란? 다음 설정과 같다.

```css
{
  opacity: 0;
  visibility: hidden;
}
```

트위닝 과정에서 `visibility` 값이 `inherit` 값으로 설정 변경되며, `opacity` 값은 `1`로 변경 된다.


<img src="../../ASSETS/greensock-tweenlite-autoalpha.png" alt="">


---

### 3. 이징(Easing) 사용법

[GSAP Ease Visualizer](https://greensock.com/ease-visualizer)

##### 이징 유형


ease | type
--- | ---
`Power0` | `easeNone`
`Power1` | `easeIn`
`Power2` | `easeOut`
`Power3` | `easeInOut`
`Back` |
`Elastic` |
`Bounce` |
`Rough` |
`SlowMo` |
`SteppedEase.config(n)` |
`Circ` |
`Expo` |
`Sine` |
`customElse.create()` |


##### Code

```js
TweenLite.from( brand, 1.45, { x: 100, ease: Back.easeOut } );
```

---

### 4. 콜백 함수(Callback Functions) 사용법

- `onStart` : 시작할 때 발생하는 이벤트이며, 콜백 함수를 설정할 경우 실행
- `onUpdate` : 업데이트 할 때 발생하는 이벤트이며, 콜백 함수를 설정할 경우 실행
- `onComplete` : 완료될 때 발생하는 이벤트이며, 콜백 함수를 설정할 경우 실행

##### Code


```js
var update_count = 0;
TweenLite.from(
  brand, 1,
  { opacity: 0, y: -200 },
  // 이벤트 핸들러 설정
  onStart: startAction,
  onUpdate: updateAction,
  onComplete: completeAction
);

function startAction()    { console.log( '애니메이션 시작!' ); }
function updateAction()   { console.log( '애니메이션 업데이트!', ++update_count ); }
function completeAction() { console.log( '애니메이션 완료!' ); }
```


---

### 5. 타임라인(Timeline) 사용법

- [SimpleTimeline](https://greensock.com/docs/#/HTML5/GSAP/Core/SimpleTimeline/)
- [TimelineLite Documentation](https://greensock.com/docs/#/HTML5/GSAP/TimelineLite/)
- [TimelineMax Documentation](https://greensock.com/docs/#/HTML5/GSAP/TimelineMax/)

##### CDN


```html
<!-- TimelineLite CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TimelineLite.min.js"></script>

<!-- TimelineMax CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TimelineMax.min.js"></script>
```


##### 멅티 엘리먼트 애니메이션 설정


```js
var $soundtrac      = $('.soundtrac');
var $disney_pixar   = $('.disney-pixar');
var $logo           = $('.logo');
var $eve            = $('.eve');
var $m_o            = $('.m-o');
var $wall_e         = $('.wall-e');
var $music_composed = $('.music-composed');

// 멀티 엘리먼트 애니메이션 설정 —————————————————————————————————————————————————————————————————————————
TweenMax.from( $soundtrac,      0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 0   } );
TweenMax.from( $disney_pixar,   0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 0.2 } );
TweenMax.from( $logo,           0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 0.4 } );
TweenMax.from( $eve,            0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 0.6 } );
TweenMax.from( $m_o,            0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 0.8 } );
TweenMax.from( $wall_e,         0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 1.0 } );
TweenMax.from( $music_composed, 0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut, delay: 1.2 } );
```


##### 멅티 엘리먼트 ➡︎ 타임라인 기반 애니메이션 설정


```js
// 타임라인 애니메이션 설정 —————————————————————————————————————————————————————————————————————————
var tl = new TimelineLite();

tl
  // delay 속성 없이도 먼저 애니메이션 큐(Queue)에 쌓인 애니메이션부터 순차적 실행
  .from( $soundtrac,      0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut } )
  .from( $disney_pixar,   0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut } )
  .from( $logo,           0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut } )
  // '-=0.15' 설정할 경우, 0.15 초씩 빠르게 애니메이션 진행 (상대적 설정)
  .from( $eve,            0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut }, '-=0.15' )
  .from( $m_o,            0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut }, '-=0.15' )
  .from( $wall_e,         0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut }, '-=0.15' )
  .from( $music_composed, 0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut }, '-=0.15' );
```


---

### 6. 타임라인에 트윈 설정

포지션(절대/상대) 및 레이블 설정


```js
var tl = new TimelineLite();

tl
  .from( $soundtrac,      0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut } )
  // 레이블 설정
  .add('intro')
  .from( $disney_pixar,   0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut }, '-=0.15' )
  .from( $logo,           0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut }, '-=0.15' )
  // 레이블을 뒤에 제공하면, 레이블과 동시에 애니메이션 진행
  .from( $eve,            0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut }, 'intro' )
  .from( $m_o,            0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut }, 'intro+=0.18' )
  // 숫자를 설정할 경우, 절대 위치 설정처럼 애니메이션 진행 (절대적 설정)
  .from( $wall_e,         0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut }, 2.5 )
  .from( $music_composed, 0.3, { autoAlpha: 0, y: -100, ease: Power1.easeOut }, 3 );
```


---

### 7. 타임라인 컨트롤

- `.play()`
- `.pause()`
- `.resume()`
- `.reverse()`
- `.timeScale()`
- `.seek()`
- `.progress()`
- `.restart()`

##### 컨트롤 버튼


```html
<button type="button" class="button is-play">play</button>
<button type="button" class="button is-pause">pause</button>
<button type="button" class="button is-resume">resume</button>
<button type="button" class="button is-reverse">reverse</button>
<button type="button" class="button is-speed-up">speed up</button>
<button type="button" class="button is-speed-down">speed down</button>
<button type="button" class="button is-seek-1s">seek 1sec</button>
<button type="button" class="button is-goto-50p">go to 50%</button>
<button type="button" class="button is-restart">restart</button>
```


##### 타임라인 컨트롤 이벤트 리스너 + 핸들러 설정


```js
$('.button.is-play').on('click', $.proxy(tl.play, tl));
$('.button.is-pause').on('click', $.proxy(tl.pause, tl));
$('.button.is-resume').on('click', $.proxy(tl.resume, tl));
$('.button.is-reverse').on('click', $.proxy(tl.reverse, tl));
$('.button.is-speed-up').on('click', $.proxy(tl.timeScale, tl, 8));
$('.button.is-speed-down').on('click', $.proxy(tl.timeScale, tl, 0.5));
$('.button.is-seek-1s').on('click', $.proxy(tl.seek, tl, 1));
$('.button.is-goto-50p').on('click', $.proxy(tl.progress, tl, 0.5));
$('.button.is-restart').on('click', $.proxy(tl.restart, tl));
```


---

### 8. 스태거(Stagger) 애니메이션

##### Stagger 메서드

- `.staggerTo()`
- `.staggerFrom()`
- `.staggerFromTo()`


```js
// .staggerFrom()
tl.staggerFrom($buttons, 0.3, {x: 100, ease: Power3.easeOut}, 0.1);

// .staggerTo()
tl.staggerTo($buttons, 0.3, {x: -20, ease: Power3.easeOut}, 0.1);

// .staggerFromTo()
tl.staggerTo(
  $buttons,
  0.3,
  {autoAlpha: 0, x: 20},
  {autoAlpha: 1, x: 0, ease: Power3.easeOut},
  0.1);

// .staggerFrom() + cycle
tl.staggerFrom($buttons, 0.3, {
  cycle: {
    x: [50, -50],
    // scale: [2, 0.5],
    // rotation: [20, -20],
  },
  autoAlpha: 0,
  ease: Back.easeOut
}, 0.1);
```


---

### 9. TimelineMax vs TimelineLite

##### Loader 마크업


```html
<div class="loader" role="group" aria-label="로딩 중....">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```


##### Loader, Dot 스타일링


```scss
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
  .dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 6px;
    border: 2px solid #2b4d66;
    border-radius: 50%;
  }
}
```


##### Loader, Dot 애니메이션 설정


```js
// { paused: true } 옵션 전달 : 일시정지
var tl = new TimelineLite({ paused: true });

// Loader 타임라인 인스턴스 생성
var tlLoader = new TimelineLite();

// Loader, Dot 문서 객체 참조
var $loader = $('.loader');
var $dots   = $('.dot', $loader);

tlLoader
  .staggerFromTo(
    $dots,
    0.3,
    { autoAlpha: 0, y: 0 },
    { autoAlpha: 1, y: 20, ease: Back.easeInOut },
    0.05
  )
  .fromTo(
    $loader,
    0.3,
    { autoAlpha: 1, scale: 1.3 },
    { autoAlpha: 0, scale: 1, ease: Power0.easeNone },
    0.9
  );
```


#### TimelineLite ➡︎ TimelineMax로 변경

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TimelineMax.min.js"></script>
```

##### 반복 설정 및 완료 이벤트 리스닝 & 콜백


```js
var tl = new TimelineLite({ paused: true });

// { repeat: -1 } : 무한 반복 설정.
var tlLoader = new TimelineMax({ repeat: -1 });

// { repeat: 2 } : 해당 카운트 만큼 반복 후, 완료 시 loadContent 함수 호출
var tlLoader = new TimelineMax({ repeat: 2, onComplete: loadContent });

funtion loadContent() {
  console.log('Loader 애니메이션 완료');
}
```


##### 콜백 함수 내부에 Loader Out 애니메이션 설정


```js
var tlLoader = new TimelineMax({ repeat: 2, onComplete: loadContent });

funtion loadContent() {
  var tlLoaderOut = new TimelineLite();
  tlLoaderOut
    .to($loader, 0.3, { autoAlpha: 1, scale: 1.3, ease: Power0,easeNone })
    .staggerFromTo(
      $dots,
      0.3,
      { y: 0, autoAlpha: 0 },
      { y: 20, autoAlpha: 1, ease: Back.easeInOut },
      0.05,
      0
    )
    .to($loader, 0.3, { y: -150, autoAlpha: 0, ease: Back.easeIn }, '+=0.3');
}
```


##### 로더 완료 시, 색상 변경 및 contentIn 콜백


```js
funtion loadContent() {
  // #2. { onComplete: contentIn } 설정
  var tlLoaderOut = new TimelineLite({ onComplete: contentIn });
  tlLoaderOut
    // #1. .set() 설정
    .set($dots, { backgroundColor: '#2b4d66' })
    // ...
}

function contentIn() {
  // tl 인스턴스 play() 메서드 수행
  tl.play();
}
```



---

### 10. TweenMax 응용

`addPause()` 메서드를 추가한 후, `play()`, `reverse()`로 컨트롤


```js
var tl = new TimelineLite({ paused: true });
var $box = $('.box');
var $button_prev, $button_next;

// 타임라인 인스턴스 설정
tl
  .to($box, 0.6, {x: '100%', y: '100%', ease:Power2.easeInOut})
  .addPause() // 일시정지 추가
  .to($box, 0.6, {x: '50%', y: '50%', ease:Power2.easeInOut})
  .addPause()
  .to($box, 0.6, {rotation: 90, transformOrigin: '100% 100%', ease:Power2.easeInOut})
  .addPause()
  // xPercent: 속성 값을 주면, 박스가 설정 값 만큼 이동
  .to($box, 0.6, {rotation: 0, xPercent: -100, ease: Powser2.easeInOut})
  .addPause()
  .to($box, 0.6, {rotation: 720, transformOrigin: '50% 50%', ease: Powser2.easeInOut});

// 이벤트 리스너 설정, 핸들러 바인딩
$button_prev.on('click', $.proxy(tl.play, tl));
$button_next.on('click', $.proxy(tl.reverse, tl));
```

