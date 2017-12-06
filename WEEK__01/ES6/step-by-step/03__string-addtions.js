/*! ES6__03_string-additions.js @ 2017, yamoo9@naver.com */


//////////////////////
// String Additions //
//////////////////////

// ES5 //
(function(){
  'use strict';

  const players = 'messi ronaldo honaldo son'.split(' ');

  function filterWord(words, filter) {
    let word_list = [];
    for ( let i=0, l=words.length; i<l; ++i ) {
      let word = words[i];
      if ( word.indexOf('naldo') > -1 ) {
        word_list.push(word);
      }
    }
    return word_list;
  }

  let naldos = filterWord(players, 'naldo');

  console.log(naldos);

})();


// ES6 //
// string.includes()
// includes() 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 결정하고,
// 그 결과를 true 또는 false로 반환
// https://goo.gl/i42DvH



// -------------------------------------------------------------------------------


// ES5 //
(function(){
  'use strict';

  let kings_4 = '청룡 백호 현무 주작';

  // 1. kings_4의 글자는 '백호'로 시작하는가?
  kings_4.substr(0, 2) === '백호'; // false

  // 유틸리티 함수
  function startsWith(word, find) {
    return word.substr(0, find.length) === find;
  }

  startsWith(kings_4, '청룡'); // true

  // 2. '현무'는 kings_4 글자의 6 인덱스부터 시작하는가?
  kings_4.substr(6, '현무') === '현무'; // true

  // 유틸리티 함수 업그레이드
  function startsWith(word, find, start) {
    start = start || 0;
    return word.substr(start, find.length) === find;
  }

  startsWith(kings_4, '주작', 9); // true

})();


// ES6 //
// string.startsWith()
// startsWith() 메소드는 어떤 문자열이 특정 문자로 시작하는지 확인 할 수 있으며,
// 그 결과는 true 혹은 false로 반환
// https://goo.gl/YIQb4i



// -------------------------------------------------------------------------------


// ES5 //
(function(){
  'use strict';

  let season = '봄 여름 가을 겨울';

  // 1. season의 글자는 '겨울'로 끝나는가?
  let index = season.length - 2;
  season.substr(index, 2) === '겨울'; // true

  // 유틸리티 함수
  function endsWith(word, find, end) {
    end = (end || word.length) - find.length;
    let last_index = word.indexOf(find, end);
    return last_index !== -1 && last_index === end;
  }

  endsWith(season, '겨울'); // true

  // season의 글자는 '가을'이 7번째 인덱스(가을 다음 위치)에서 끝나는가?
  endsWith(season, '가을', 7); // true

})();


// ES6 //
// string.endsWith()
// endsWith() 메서드를 사용하여 어떤 문자열에서 특정 문자열로 끝나는지를 확인 할 수 있으며,
// 그 결과를 true 혹은 false로 반환
// https://goo.gl/ZCxoCw


// -------------------------------------------------------------------------------


// ES5 //
(function(){
  'use strict';

  let repeat_word = 'hi';

  function repeat(word, count) {
    count = count || 0;
    if (count === 0) { return ''; }
    let combine = word;
    while ( --count ) {
      combine += word;
    }
    return combine;
  }

  repeat(repeat_word);    // ''
  repeat(repeat_word, 4); // 'hihihihi'

})();


// ES6 //
// string.repeat()
// repeat()메서드는 호출된 문자열의 설정된 수만큼 복사하여,
// 새 문자열을 생성하고 반환
// https://goo.gl/L9rYD9









/// Conclusion ////////////////////////////////////////////////////////////////

/**
 * ES6를 사용하여 프로젝트를 진행한다면?
 * string addtions
 * ———————————————————————————————————————————————————————————
 *
 * .includes()
 * .startsWith()
 * .endsWidth()
 * .repeat()
 *
 */