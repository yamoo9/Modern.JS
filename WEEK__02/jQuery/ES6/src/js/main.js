'use strict';

// jQuery 이야기
// // jQuery Factory Function
// // JavaScript Design Pattern - Factory Pattern
// // 1. DOM Object
// $(document)
// $(document.documentElement)
// $(document.querySelectorAll('a'))
// // 2. CSS Selector String
// $('html')
// $('.target .widget > :first-child')
// $('.target').find('.widget').children(':first')
// // 3. HTML String
// $('<div/>', {
//   id: 'better',
//   'class': 'container',
//   on: {
//     click: function(){}
//   }
// })
// // Manipulation
// .prependTo('.parent');
// // 4. Like Ready Function
// $(document).ready(function(){});
// $(function(){});

// ES6
// jQuery Ready
// let initialization = () => {
//   console.log('Try jQuery Ready');
// };

// $(document).ready(initialization);

var btn = $('.btn a');

btn.on('click', function (e) {
  // 기본 동작 차단
  e.preventDefault();
  console.log('print');
});

btn.on('keyup', function (e) {
  var key = e.keyCode || e.which;
  // 향후 표준으로 keyCode 대체할 수 있지만...
  console.log('e.key:', e.key); // 구형 IE 동작하지 않음
  console.log('key:', key);
  // Enter, Space 모두 지원
  // http://keycode.info 참고
  if (key === 32 || key === 13) {
    // 시뮬레이션: 사용자가 버튼을 클릭한 것처럼 작동 시켜라
    btn.trigger('click');
    // btn.click();
  }
});