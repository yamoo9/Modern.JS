/*! ES6__12_array-additions.js @ 2017, yamoo9@naver.com */


/////////////////////
// Array Additions //
/////////////////////

// Array.from()
// - Array.from() 메소드는 유사 배열 혹은 반복가능한 객체로부터 새 Array 인스턴스를 만듭니다.


// Array.of()
// - Array.of() 메소드는 인자의 수나 유형에 관계없이 가변 인자를 갖는 새 Array 인스턴스를 만듭니다.


// array.keys()
// 배열의 각 인덱스에 대한 key들을 가지는 새로운 Array Iterator 객체를 반환합니다.


// array.values()
// 배열의 요소값들에 대한 Array Iterator 객체를 반환합니다.


// array.entries()
// 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새로운 Array Iterator 객체를 반환합니다.


// array.find()
// find()메서드는 해당 배열 안의 값을 하나 반환합니다.
// 이 때, 콜백으로 전달받은 테스트 함수가 요구하는 조건을 만족하는 값을 반환합니다.
// 그렇지 않으면 undefined를 반환합니다.


// array.findIndex()
// findIndex () 메서드는 제공된 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다.
// 그렇지 않으면 -1이 리턴됩니다.


// array.includes()
// 배열에 특정 요소가 포함돼있는지 알아내어 true 또는 false를 적절히 반환합니다.


// array.fill()
// fill() 메소드는 배열의 시작 인덱스부터 끝 인덱스까지 정적 값으로 배열 요소들을 채웁니다.


// array.copyWithin()
// copyWithin() 메서드는 배열의 일부를 복사한 뒤,
// 동일한 배열의 다른 위치에 덮어쓰기 한 다음, 배열 자신을 반환합니다.
// 이 때, 크기(배열의 길이) 를 수정하지 않고 반환합니다.








/// Conclusion ////////////////////////////////////////////////////////////////

/**
 * ES6를 사용하여 프로젝트를 진행한다면?
 * Array Additions
 *
 * Array.from                 https://goo.gl/WNGQDb
 * Array.of                   https://goo.gl/D2KBsy
 * Array.prototype.keys       https://goo.gl/bVcAC9
 * Array.prototype.values     https://goo.gl/cLuXnW
 * Array.prototype.entries    https://goo.gl/WHDSGo
 * Array.prototype.find       https://goo.gl/24Hnf9
 * Array.prototype.findIndex  https://goo.gl/KnqK13
 * Array.prototype.includes   https://goo.gl/9o8Vf9
 * Array.prototype.fill       https://goo.gl/NNJp5k
 * Array.prototype.copyWithin https://goo.gl/dhggqg
 * ———————————————————————————————————————————————————————————
 *
 * 배열은 데이터 관리에 자주 사용되는 객체로 새롭게 추가된
 * 스태틱 메서드, 프로토타입 인스턴스 메서드를 적극 활용
 *
 */