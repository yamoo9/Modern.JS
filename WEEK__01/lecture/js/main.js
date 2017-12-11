// DOM 수집
var links = document.querySelectorAll('.demo a');

var data = 'one two three four'.split(' ');

// var 사용 시 주의할 점
// 자바스크립트 클로저를 사용해 문제 해결
(function(){
  'use strict';

  // 외부 함수
  function linkClick(i){
    console.log('i:', i);
    console.log('data[i]:', data[i]);
    // 내부 함수
    function innerLinkClick(e) {
      e.preventDefault();
      console.log('clicked: i:', i);
      console.log('clicked: data[i]:', data[i]);
    }
    // 내부 함수 반환
    return innerLinkClick;
  };

  for (var i=0, l=links.length; i<l; ++i) {
    var link = links.item(i);
    // JavaSCript Closure
    link.onclick = linkClick(i);
  }

  // console.log(i); // 4

}) // ();


// let을 사용할 경우 쉽게 문제 해결됨.
for (let i=0, l=links.length; i<l; ++i) {
  let link = links.item(i);
  link.onclick = function (e) {
    e.preventDefault();
    console.log('clicked: i:', i);
    console.log('clicked: data[i]:', data[i]);
  }
  // JavaSCript Closure
  // link.onclick = linkClick(i);
}