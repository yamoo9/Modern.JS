// jQuery 의존
import $ from 'jquery';

// jQuery 버전 출력
// console.log($.fn.jquery);

// jQuery 스크립팅
const $html = $('html');

$html.addClass('root-element');

const $container = $('.container');

// jQuery
$container.on('click', e => {
  // DOM API
  // IE 10+
  // this.classList.toggle('clicked');
  // 주의할 점! 화살표 함수 사용할 경우,
  // 내부의 this는 상위 컨텍스트 참조 객체를 가리킴.
  // console.log('this:', this);
  // 이벤트 위임
  // console.log('e.target:', e.target);
  // console.log('e.currentTarget:', e.currentTarget);
  $(e.currentTarget).toggleClass('clicked');
});


// Button Class 사용
import Button from './components/Button';
// import Carousel from './components/Carousel';

const my_btn = new Button( $('.y9-button') );