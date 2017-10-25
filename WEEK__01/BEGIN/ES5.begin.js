/*! ES5.js © yamoo9.net, 2017 */

//////////////////////////////
// 1. JavaScript 데이터 유형
// 참고: https://goo.gl/UqYzzm
//////////////////////////////


// 1-1) 원시(Primitive) 데이터 유형


// 1-2) 참조(Reference)형 데이터 유형


// 1-3) 원시 데이터 타입, 참조형 데이터 타입 구분
// 1-3-1) 값 복사(pass by value)
// 1-3-2) 값 참조(pass by reference)


// 1-4) 자바스크립트 메모리 관리는 어떻게 하는가?
// 참고: https://goo.gl/EWWHnZ






////////////////////////////////////
// 2. JavaScript 데이터 유형 올바른 감지
////////////////////////////////////


// 2-1) 데이터 타입 검증 방법 typeof
// 참고: https://goo.gl/6rpQQi


// 2-2) 데이터 타입 검증 방법 instanceof
// 참고: https://goo.gl/3w3EEw


// 2-3) 데이터 타입 검증 방법 .consturctor 속성
// 참고: https://goo.gl/RqAF6f


// 2-4) 데이터 타입 검증 방법 직접 만든 유틸리티 함수






////////////////////////////
// 3. JavaScript 구문, 표현식
////////////////////////////


// 3-1) 구문(Statement)
// statement는 "구문" 이라고 할 수 있습니다.
// 의미 상으로 보면 자바스크립트 인터프리터(번역기)에게 내리는 지시문(Directive)이라 할 수 입니다.
// 인터프리터가 이것을 보고 어떤 동작을 해야하는지 알게됩니다.
// 구문은 어떻게 동작해야 하는지 동작만 알려주고 사라집니다.
// 즉, 구문의 결과로는 아무것도 남지 않습니다.


// 3-2) 표현식(Expression)
// 식은 expression 이라 하는데, 간단히 말해 하나의 값이 되는 것입니다.
// 결론적으로 다른 모든 식은 하나의 값이 수렴하여 값 식이 되는 것이므로 "식 == 값"으로 이해해도 무방합니다.







////////////////////
// 4. JavaScript 함수
////////////////////

// 함수호출 : 함수를 호출한 결과는 값이 됩니다.
// 자바는 void를 반환하면 값이 될 수 없습니다만,
// 자바스크립트는 명시적으로 반환하지 않아도 undefined 가 반환되어
// 언제나 값으로 수렴됩니다.


// 4-1) 영역(Scope)

// 4-1-1) 라이프 사이클(Life Cycle)

// 4-1-2) 호이스팅(Hosting)

// 4-1-3) this 컨텍스트 참조

// 4-1-4) .call(), .apply(), .bind()







////////////////////
// 5. JavaScript 배열
////////////////////


// 5-1) 데이터 관리

// 5-1-1) 데이터 아이템 생성(Create)

// 5-1-2) 데이터 아이템 읽기(Read)

// 5-1-3) 데이터 아이템 변경(Update)

// 5-1-4) 데이터 아이템 제거(Delete)


// 5-2) Array.isArray()


// 5-3) .forEach()  VS  .map()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// 5-4) .slice()  VS  .filter()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// 5-5) .indexOf()  VS  .lastIndexOf()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf


// 5-6) .every()  VS  .some()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some


// 5-7) .reduce()  VS  .reduceRight()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight







////////////////////
// 6. JavaScript 객체
////////////////////


// 6-1) Object.create()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create


// 6-2) Object.defineProperty(), Object.defineProperties()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties


// 6-3) Object.getPrototypeOf()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf


// 6-4) Object.keys()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


// 6-5) Object.seal()  VS Object.freeze()  VS  Object.preventExtensions()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions


// 6-6) Object.isSealed()  VS  Object.isFreeze()  VS  Object.isExtensible()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible







/////////////
// 7. ES5 상속
/////////////

var human = {
  sleeping : function() {},
  running  : function() {},
  eating   : function() {},
  going    : function() {},
};

var artist = Object.create(human, {
  thinking: {
    value: function(){},
    writable: true,
    enumerable: true,
    configurable: true
  },
  drawing: {
    value: function(){},
    writable: true,
    enumerable: true,
    configurable: true
  },
});






////////////////////////
// 8. DOM API
////////////////////////


// 8-1) DOM 선택 API 메서드
// getElementById()
// getElementsByTagName()
// getElementsByClassName() (IE 9+)
// querySelector() (IE 8+ CSS2 선택자로 제한, IE 9+)
// querySelectorAll()
// matches() (IE 9+ `ms` 프리픽스 필요)
// - msMatcheSelector()
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches


// 8-2) Node 속성
// childNodes
// firstChild
// lastChild
// nextSibling
// previousSibling
// parentNode
// nodeType
// nodeName
// nodeValue


// 8-3) Node 메서드
// hasChildNodes()
// appendChild()
// insertBefore()
// removeChild()
// replaceChild()
// cloneNode()
// contains()
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
// isEqualNode() (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode
// compareDocumentPosition() (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition


// 8-4) Document 메서드
// createElement()
// createTextNode()


// 8-5) HTML*Element 속성
// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// attributes (이 속성을 통해 반환되는 유사 배열 집합은 라이브 상태, 즉 실시간으로 변경된다)
// innerHTML
// outerHTML
// innerText
// textContent (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
// childElementCount (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount
// classList (IE 10+)
// - add()
// - remove()
// - contains()
// - toggle()
// dataset (JavaScript 객체로 `data-*` 속성에 사용된 `-`은 모두 camelCase로 처리하여 사용)


// 8-6) HTML*Element 메서드
// getAttribute()
// setAttribute()
// removeAttribute()
// hasAttribute() (요소노드에 속성이 있으면 값이 없어도 `true`를 반환, `Boolean` 속성 반환 값일 경우 상태 확인 가능)
// insertAdjacentHTML()
// https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
// insertAdjacentElement() (IE 8+)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
// insertAdjacentText() (IE ?)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText







////////////////////////
// 9. AJAX & REST API
////////////////////////

// 비동기 통신을 위한 객체 생성 (생성자 함수로부터)
// IE 6-, ActiveXObject() 사용....
// IE 7+, XMLHttpRequest() 사용 가능

// 비동기 통신을 설정
// 서버에 요청


// REST API
// HTTP 메서드: GET, POST, PUT, DELETE
// https://myjson.com


// defer, async 속성 사용 방법, 차이점 설명
// http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html

// defer 속성은 HTML 해석이 끝난 후 차례대로 실행된다.
// 하지만 모든 브라우저에서 지원하지는 않는다. (IE 10+)

// async 속성은 비동기적으로 실행되기에 실행 순서가 보장되지 않는다.
// 그러므로 의존 모듈이 있을 경우 사용에 주의가 요구된다.