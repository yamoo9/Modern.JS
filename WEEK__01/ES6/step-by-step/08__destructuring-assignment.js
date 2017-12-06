/*! ES6__08__destructuring-assignment.js @ 2017, yamoo9@naver.com */


//////////////////////////////
// Destructuring Assignment //
//////////////////////////////

// 객체: movie 데이터
var movie = {
  name: '포레스트 검프',
  director: '로버트 저메키스',
  openning: '1994-10-15',
  link: 'http://movie.naver.com/movie/bi/mi/basic.nhn?code=17159'
};

// 배열: utensils 데이터
// https://goo.gl/Hbt3NV
var utensils = [
  '그물국자',
  '건지개',
  '스패튤라',
  '뒤집개',
  '국자',
  '포테이토 매셔',
];

// JSON: people 데이터
var people = [
  {
    "gender": "female",
    "name": "gina reynolds",
    "email": "gina.reynolds@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/women/35.jpg"
  }, {
    "gender": "male",
    "name": "leslie fisher",
    "email": "leslie.fisher@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/men/10.jpg"
  },
  {
    "gender": "female",
    "name": "brooke fuller",
    "email": "brooke.fuller@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
  },
  {
    "gender": "male",
    "name": "کوروش کامروا",
    "email": "کوروش.کامروا@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/men/77.jpg"
  },
  {
    "gender": "female",
    "name": "judith gerlach",
    "email": "judith.gerlach@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
  },
  {
    "gender": "male",
    "name": "hudson lewis",
    "email": "hudson.lewis@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
  },
  {
    "gender": "female",
    "name": "alice french",
    "email": "alice.french@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
  }
];

// ES5 //
// 객체
(function(movie){
  'use strict';

  // 객체의 속성 할당
  var name     = movie.name;
  var director = movie.director;
  var openning = movie.openning;
  var link     = movie.link;

  console.log('name:', name);
  console.log('director:', director);
  console.log('openning:', openning);
  console.log('link:', link);

})(window.movie);

// 배열
(function(utensils){
  'use strict';

  // 그물국자
  var skimmer = utensils[0];
  // 건지개
  var draining_spoon = utensils[1];
  // 스패튤라
  var spatula = utensils[2];
  // 뒤집개
  var turner = utensils[3];
  // 국자
  var ladle = utensils[4];
  // 포테이토 매셔
  var potato_masher = utensils[5];

})(window.utensils);

// JSON
(function(people){
  'use strict';

  people.forEach(function(person) {
    console.log('name:', person.name);
    console.log('email:', person.email);
  });

  var Brooke = people[2],
      judith = people[people.length - 1];

  function logEmail(o) {
    var email = o.email;
    console.log(email);
  }

})(window.people);



// ES6 //

// 객체 비구조화 할당

// 배열 비구조화 할당

// JSON 비구조화 할당






/// Conclusion ////////////////////////////////////////////////////////////////

/**
 * ES6를 사용하여 프로젝트를 진행한다면?
 * Destructuring Assignment
 * 참고: https://goo.gl/5AjCug
 * ———————————————————————————————————————————————————————————
 *
 * 객체 속성 또는 배열 값을 변수에 할당할 때, 비구조화 할당을 활용하면 매우 유용
 *
 * 객체
 *  - 속성(property or key) 이름과 비교하여 할당
 *
 * 배열
 *  - 원소의 순서(order)에 맞춰 할당
 *
 */