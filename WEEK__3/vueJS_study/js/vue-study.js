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


// 3. Vue Framework, ES5
// Module Pattern: IIFE
;(function(global, Vue){
  'use strict';

  var vue_setting = {
    // Vue 인스턴스가 관찰할 템플릿 요소 연결
    el: '.container',
    // 모델 데이터 설정
    // ⌘ 서버에서 가져온 데이터 연결
    // data: global.user
    data: {
      input: 'First Commit',
      using_v_text: false,
      people: [
        {
          name: '조나단',
          age: 32
        },
        {
          name: '앤써니',
          age: 26
        },
        {
          name: '라라벨',
          age: 45
        }
      ],
      todo_item: '',
      todoList: [
        // 데이터 모델링
        {
          done: false,
          todo: 'Vue.js 학습'
        },
        {
          done: false,
          todo: 'Vue.js TodoList 만들기'
        },
        {
          done: true,
          todo: 'jQuery 스타일 차차 잊기'
        }
      ],
      currency: 10900,
      changed_currency_value: '변경된 통화 값이 여기에 출력됩니다.'
    },
    methods: {
      addTodoItem: function(direction) {
        // console.log('add todo item');
        // this === Vue {}     (X)
        // this === Vue{}.data (O)
        // console.log(this.todoList);
        // console.log(direction);

        var new_item = {
          done: false,
          todo: this.todo_item
        };

        // Method 1
        // if ( direction === 'append' ) {
        //   this.todoList.push(new_item);
        // } else {
        //   this.todoList.unshift(new_item);
        // }

        // Method 2
        this.todoList[
          direction === 'append' ?
          'push' : 'unshift'
        ](new_item);
      },
      removeTodoItem: function(index) {
        // remove todo item
        // console.log(index);
        this.todoList.splice(index, 1);
      },
      changeCurrency: function() {
        var input = (this.currency + '').trim();
        input = input.split('').reverse();
        input.forEach(function(c,i) {
          if ( i % 3 === 2 ) {
            input.splice(i,1,','+c);
          }
        });
        input = input.reverse().join('').replace(/^,/,'');
        this.changed_currency_value = input + '원';
      }
    }
  };

  // Vue 인스턴스(객체) 생성
  global.vm = new Vue(vue_setting);

})(window, window.Vue);
