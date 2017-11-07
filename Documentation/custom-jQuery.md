###### jQuery

# jQuery 커스텀 빌드

jQuery를 빌드하려면 [Node.js](https://nodejs.org)/[NPM](https://npmjs.org) 및 [Git](https://git-scm.com) v1.7 이상이 필요합니다.

- Windows 사용자는 Node.js, Git을 설치합니다.
- OSX 사용자는 [Homebrew](http://brew.sh/)를 사용하여 설치합니다.<br>
`brew install git node` 명령으로 Git, Node.js를 설치합니다.

## 1. jQuery 프로젝트 복제

GitHub 저장소 데이터를 로컬 드라이브로 복제합니다.

```sh
$ git clone git://github.com/jquery/jquery.git
```

## 2. jQuery 프로젝트 이동/빌드

jquery 디렉토리로 이동한 후, `build` 명령을 실행합니다.

```sh
$ cd jquery && npm run build

# build 명령 실행 시 출력
> jquery@3.2.2-pre build /Users/yamoo9/Desktop/jquery
> npm install && grunt
```

## 3. jQuery 모듈

jQuery 모듈 중 일부를 제외한 빌드를 수행할 수 있습니다. `core`, `selector`를 제외한 모든 모듈은 제외 될 수 있습니다.
모듈을 제외 시키려면 `src` 디렉토리를 기준(`.js` 확장자 제외)으로 옵션을 추가합니다.

제외 가능한 모듈은 다음과 같습니다.

- [x] __ajax__: 모든 AJAX 기능. `$.ajax()`, `$.get()`, `$.post()`, `$.ajaxSetup()`, `.load()`, `.ajaxStart()` 등.
  - [x] __ajax/xhr__: XMLHTTPRequest AJAX 전송 부분.
  - [x] __ajax/script__: `<script>` 스크립트를 검색하는데 사용되는 AJAX 전송 전용.
  - [x] __ajax/jsonp__: JSONP AJAX 전송 전용.
- [x] __css__: `.css()` 메서드를 제외. CSS 모듈에 의존하는 효과(`effects`), 치수(`dimensions`), 옵셋(`offset`) 기능.
  - [x] __css/showHide__: 애니메이션 처리되지 않는 `.show()`, `.hide()`, `.toggle()` 메서드.
- [x] __effects__: `.animate()` 메서드. `.slideUp()`, `.hide("slow")` 포함.
- [x] __dimensions__: `.width()`, `.height()` 메서드. `inner-*`, `outer-*` 또한 포함.
- [x] __offset__: `.offset()`, `.position()`, `.offsetParent()`, `.scrollLeft()`, `.scrollTop()` 메서드.
- [x] __deprecated__: 추천에서 제외된 메서드(하지만 아직 jQuery에 포함된).
- [x] __event__: `.on()`, `.off()` 메서드를 포함하는 모든 이벤트 기능.
  - [x] __event/alias__: 모든 이벤트 별칭(Alias). `.click()`, `.mouseover()` 등.
  - [x] __event/focusin__: `focusin`, `focusout` 크로스 브라우징 지원 이벤트.
  - [x] __event/trigger__: `.trigger()` `.triggerHandler()` 메서드. alias, focusin 모듈에서 사용.
- [x] __wrap__: `.wrap()`, `.wrapAll()`, `.wrapInner()`, `.unwrap()` 메서드.
- [x] __core/ready__: `.ready()` 메서드. `</body>` 바로 앞에서 스크립트를 실행하면 필요하지 않은 모듈.
- [x] __deferred__: `jQuery.Deferred`, `jQuery.Callbacks`.
- [x] __exports/global__: 글로벌 jQuery 변수($ 및 jQuery)를 window 객체의 속성에 추가.
- [x] __exports/amd__: AMD `.define()` 방법.
- [x] __sizzle__: Sizzle 선택자 엔진. 사용하지 않을 경우 `querySelectorAll()` 엔진(IE 8+)으로 대체됨.

## 4. jQuery 커스텀 빌드

빌드 프로세스 옵션으로 AMD 모듈 이름을 설정할 수 있습니다. `amd` 옵션에 모듈 이름을 추가하면 해당 모듈은 빌드 과정에서 제외됩니다.

먼저 `package.json` 파일을 열어 `c-build` 스크립트를 추가 합니다.

```js
// package.json
"scripts": {
  "c-build": "grunt"
},
```

이어서 등록된 NPM 스크립트 `c-build`를 사용하되 옵션으로 `custom:-모듈이름`을 추가하면 빌드 됩니다.

##### 특정 모듈을 제외한 커스텀 빌드 예시

모든 AJAX 기능을 제외할 경우 아래 명령을 실행하여 빌드합니다.

```sh
$ npm run c-build -- custom:-ajax
```

모든 CSS 기능을 제외할 경우 아래 명령을 실행하여 빌드합니다. <br>
✪ CSS 모듈에 의존하는 `effects`, `offset`, `dimensions`도 함께 제외됩니다.

```sh
$ npm run c-build -- custom:-css
```

제외할 모듈이 여러 개일 경우는 콤마(,)를 추가하여 제외할 모듈 이름을 설정합니다.

```sh
$ npm run c-build -- custom:-effects,-deprecated,-event-alias,-core/ready,exports/amd

# 빌드.....
> jquery@3.2.2-pre c-build /Users/yamoo9/Desktop/jquery
> grunt "custom:-effects,-deprecated,-event-alias,-core/ready,exports/amd"

Running "custom:-effects,-deprecated,-event-alias,-core/ready,exports/amd" (custom) task
Creating custom build...


Running "build:all:*:-effects:-deprecated:-event-alias:-core/ready:exports/amd" (build) task
-effects
-effects/Tween
-effects/animatedSelector
-deprecated
-event-alias
-core/ready
exports/amd
>> File 'dist/jquery.js' created.

Running "uglify:all" (uglify) task
>> 1 sourcemap created.
>> 1 file created 248.77 kB → 78.86 kB

Running "dist" task

Done.
```

#### 빌드 결과

> 모든 기능이 포함된 jQuery v3.2.2 압축 버전 용량: __85kb__<br>
> 이펙트를 포함한 기능이 제외된 jQuery v3.2.2 압축 버전 용량: __79kb (-6kb)__