// Module :: IIFE 패턴
(function(global, _){
  'use strict';

  // ES6 :: const, let
  const document = global.document;
  // let heading_content = ['Hello', 'Webpack', ':)'].join(' ');
  // [의존성] Lodash 라이브러리 코드
  let heading_content = ['Hello', 'Webpack', ':)'];

  // ES6 :: Arrow Function
  let component_heading = () => {
    let el = document.createElement('h1'); // <h1>
    if ( !_.isArray(heading_content) ) {
      throw new Error('_.join() 함수를 사용하려면 배열이 요구됩니다.');
    }
    // validate(condition, error_message);
    el.textContent = _.join(heading_content, ' ');
    return el;
  };

  // DOMScript
  document.querySelector('body').appendChild( component_heading() );

})(window, window._);