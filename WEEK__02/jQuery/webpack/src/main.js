// ;(function (global, _, $) {
  // 'use strict';

  // Lodash
  // node_modules/lodash
  import _ from 'lodash';
  // jQuery
  // node_modules/jquery
  import $ from 'jquery';

  const document = global.document;
  let heading_message = ['Hello', 'Webpack', ':)'];

  function component() {
    let el = document.createElement('h1');
    // Lodash 라이브러리 join() 메서드 사용
    el.innerHTML = _.join(heading_message, ' ');
    return el;
  }
  // document.body.appendChild(component());

  function jq_component() {
    // return $('<h1>').html( _.join(heading_message, ' ') );
    return $('<h1>').html( heading_message.join(' ') );
  }

  $('body').append(jq_component);

// })(window, window._, window.jQuery);