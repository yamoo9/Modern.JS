/*! ES6__06__shorthand-properties.js @ 2017, yamoo9@naver.com */


//////////////////////////
// Shorthand Properties //
//////////////////////////

// ES5 //
(function(){
  'use strict';

  var animations = ['원령 공주', '센과 치히로의 대모험', '명탐정 코난', '에반게리온'];
  var movies     = ['인디애나 존스', '살인자의 기억법', '범죄 도시'];
  var music      = [
    {
      song: '선물',
      singer: '멜로망스'
    },
    {
      song: '피카부 (Peek-A-Boo)',
      singer: 'Red Velvet (레드벨벳)'
    },
  ];

  var favorites = {
    animations: animations,
    movies: movies,
    music: music
  };



  function isRequired(name) {
    throw new Error(name + '전달인자는 필수입니다.');
  }

  function Mouse(name, weight, type) {
    if (!name) { isRequired('name'); }
    weight = weight || '100g';
    type   = type   || 'Bluetooth';

    return {
      name: name,
      weight: weight,
      type: type
    };

  }

  const magic_mouse_2 = new Mouse('Magic Mouse 2', '99g');
  const mx_ergo       = new Mouse('MX ERGO', '2g');

})();



// ES6 //





/// Conclusion ////////////////////////////////////////////////////////////////

/**
 * ES6를 사용하여 프로젝트를 진행한다면?
 * Shorthand Properties
 * ———————————————————————————————————————————————————————————
 *
 * 객체의 속성, 값 이름이 동일할 경우, 속기형을 적극 활용하자.
 *
 */