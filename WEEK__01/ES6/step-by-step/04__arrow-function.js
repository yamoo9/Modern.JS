/*! ES6__04_arrow-function.js @ 2017, yamoo9@naver.com */


////////////////////
// Arrow Function //
////////////////////

// ES5 //

(function(){
  'use strict';

  var isType = function(o) {
    return Object.prototype.toString.call(o).toLowerCase().slice(8,-1);
  };

  var makeArray = function(o) {
    return Array.prototype.slice.call(o);
  };

  var extend = function() {
    var mixin = {};
    makeArray(arguments).forEach(function(o){
      for ( var prop in o) {
        if ( o.hasOwnProperty(prop) ) {
          var v = o[prop];
          if ( isType(v) !== 'object' ) {
            mixin[prop] = v;
          } else {
            mixin[prop] = extend(mixin[prop] || {}, v);
          }
        }
      }
    });
    return mixin;
  };


  var users = [
    { name: '신인기', age: 21, job: '영화배우', email: 'inki@uri.io' },
    { name: '고민준', age: 36, job: '강사', email: 'mj.k@naver.com' },
    { name: '이지아', age: 28, job: '아나운서', email: 'jialee@daum.net' },
  ];

  users = users.map(function(user){
    user.age++;
    return user;
  });


  /**
   * GitHub API
   * https://developer.github.com/v3/
   * https://taetaetae.github.io/2017/03/02/github-api/
   *
   * https://api.github.com/users/yamoo9
   * https://api.github.com/users/yamoo9/repos
   */

  function getGitHubUserForkRepos(userId) {
    return fetch(`https://api.github.com/users/${userId}/repos`)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response.data);
        return response.data;
      })
      .then(function(repos) {
        return repos.filter(function(repo) {
          return repo.fork === true;
        });
      });
  }


  var y9 = {
    _name: 'yamoo9',
    _students: [],
    printStudents: function() {
      var _this = this;
      this._students.forEach(function(student) {
        console.log( _this._name + '은 ' + student + '학생을 알고 있습니다.' );
      });
    }
  };


  function square() {
    var args = arguments;
    var _square = function() {
      var numbers = [];
      for (var number of args) {
        numbers.push(number * number);
      }
      return numbers;
    };
    return _square();
  }

  square(2, 4, 7.5, 8, 11.5, 21); // [4, 16, 56.25, 64, 132.25, 441]

})();


// ES6 //

// 1. 화살표 함수
//    - C#, Java 8, CoffeeScript 문법과 유사.


// 2. 매개변수 개수에 따른 괄호 () 생략 유무
//    - 없을 때, () 필수
//    - 1개, () 생략 가능
//    - 2개 이상, () 필수


// 3. 인라인(1줄 라인) 설정 시, 괄호 {} 및 return 생략
//    - 문(statement), 식(expression) 모두 지원.
//    - 식(expression)일 경우, {} 및 return 생략
//    - 문(statement)일 경우, {} 및 return 사용


// 4. 화살표 함수 내부 this 컨텍스트 (lexical this)
//    - 상위 컨텍스트 참조
//    - 객체 속성으로 화살표 함수를 사용하면 안되는 이유
//    - 객체 속성 내부에서 화살표 함수를 사용해야 하는 이유


// 5. 화살표 함수 내부 arguments 전달인자 (lexical arguments)
//    - 상위 컨텍스트 arguments 참조








/// Conclusion ////////////////////////////////////////////////////////////////

/**
 * ES6를 사용하여 프로젝트를 진행한다면?
 * arrow function
 * 참고: https://goo.gl/hdduQF
 * ———————————————————————————————————————————————————————————
 *
 * 함수 표현식에서는 적극 활용
 * 객체의 속성으로는 사용하지 말아야
 * 객체 속성 내부에서는 적극 활용해야
 *  - this, arguments 상위 영역 활용
 *
 */