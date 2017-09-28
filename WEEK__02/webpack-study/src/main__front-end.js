// Module :: IIFE 패턴
(function(global, _, validate){
  'use strict';

  // ES6 :: const, let
  const document = global.document;
  let heading_content = ['Hello', 'Webpack', ':)'];

  // ES6 :: Arrow Function
  let component_heading = content => {
    let el = document.createElement('h1');
    validate(_.isArray(content), '_.join() 함수를 사용하려면 배열이 요구됩니다.');
    el.textContent = _.join(content, ' ');
    return el;
  };

  // DOMScript
  document.querySelector('body').appendChild( component_heading(heading_content) );

})(window, window._, window.validate);