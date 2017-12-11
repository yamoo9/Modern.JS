// ES6 -> Babel -> ES5

// let, const
const o = ['object', 'class', 'template string', 'arrow function'];

// for
// for ~ in
// forEach(cb)

// for ~ of
// 순환 처리 Iterator 객체(String, Array, Array-Like, Map, Set, WeakMap, WeakSet), Generator
let result = [];
for ( let value of o) {
  // 필터링
  value.includes('fun') && result.push(value);
}


// 비구조화 destructuring
let [obj, cls, tst] = o;

let markup = `
    <div>
      <ul>
`;
for (let i=0, l=10; i<l; ++i) {
  console.log('i:', i);
  data.push(1, 3, 5, 7);
  console.log('data:', data);
  // templat + data binding
  markup += `
        <li>${i}</li>
  `;
}

markup += `
  </ul>
</div>
`;

console.log(markup);

// console.log('i:', i);
// console.log('data:', data);


// ES5
// function showRolles() {}
var square = function(x){
  return x * x;
};

// window.onload = showRolles;
// [1, 3, 5].forEach(showRolles);

// ES6
// Fat(=) Arrow Function
// 문 statement
let squareState = (x) => {
  return x * x;
};

// 식 expression
// 매개변수의 개수
// 0, 2개 이상 (a,b) => 생략 못함
// 1개 a => 생략 가능
let squareExp = x => x * x;

// ES6
// Iterator 객체 순환
// const map = new Map();

