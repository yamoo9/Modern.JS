/*! vue-study.js
 © yamoo9.net, 2017 */

 // 모델
window.user = {
  input: ''
};

// 1. DOM Script
(function(global){
  'use strict';

  var $ = document.querySelector.bind(document);

  var user_input   = $('.user-input');
  var input_result = $('.input-result');

  user_input.onkeyup = function(e) {
    var data = e.target.value;
    // 모델 업데이트
    user.input = data;
    // 뷰 업데이트
    input_result.textContent = data;
  };

}) // (window);


// 2. jQuery Library
;(function(global, $){
  'use strict';

  var $user_input   = $('.user-input');
  var $input_result = $('.input-result');

  $user_input.on('keyup', function(e) {
    var data = e.target.value;
    global.user.input = data;
    console.log('user.input:', user.input);
    $input_result.text(data);
  });

}) // (window, window.jQuery);


// 3. Vue Framework
;(function(global, Vue){
  'use strict';

  // Vue 인스턴스(객체) 생성
  global.vm = new Vue({
    el: '.container',
    data: global.user
  });

})(window, window.Vue);
