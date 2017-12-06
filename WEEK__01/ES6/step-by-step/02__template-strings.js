/*! ES6__02_template-strings.js @ 2017, yamoo9@naver.com */


/////////////////////////////////
// Template Strings (Literals) //
/////////////////////////////////

// HTML 코드 //
/*
<table class="y9-table delivery">
  <caption class="a11y-hidden">배송 슬롯(투입구) 시간별 Open/Closed 상황</caption>
  <thead>
    <tr>
      <td>&nbsp;</td>
      <th scope="col">월</th>
      <th scope="col">화</th>
      <th scope="col">수</th>
      <th scope="col">목</th>
      <th scope="col">금</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">09:00 - 11:00</th>
      <td>Closed</td>
      <td>Open</td>
      <td>Open</td>
      <td>Closed</td>
      <td>Closed</td>
    </tr>
  </tbody>
</table>
*/


// ES5 //
(function(){
  'use strict';

  // 표 정보
  var delivery_table_info = {
    table_class : 'table is-striped is-hoverable is-fullwidth',
    caption     : '배송 슬롯(투입구) 시간별 Open/Closed 상황',
    days        : ['월', '화', '수', '목', '금'],
    contents    : [
      { time: '09:00 - 10:00', content: ['Closed', 'Open', 'Open', 'Closed', 'Closed'] },
    ]
  };


  // HTML 템플릿(Template) + 데이터 바인딩(Data Binding)

  // 방법 0. 읽기 힘든 문자열
  var delivert_table_0 = '<table class="' + delivery_table_info.table_class + '"><caption class="a11y-hidden">' + delivery_table_info.caption + '</caption><thead><tr><td>&nbsp;</td><th scope="col">' + delivery_table_info.days[0] + '</th><th scope="col">' + delivery_table_info.days[1] + '</th><th scope = "col">' + delivery_table_info.days[2] + '</th><th scope="col">' + delivery_table_info.days[3] + '</th><th scope="col">' + delivery_table_info.days[4] + '</th></tr></thead><tfoot><tr><th scope="row">' + delivery_table_info.contents[0].time + '</th><td>'+delivery_table_info.contents[0].content[0]+'</td><td>'+delivery_table_info.contents[0].content[1]+'</td><td>'+delivery_table_info.contents[0].content[2]+'</td><td>'+delivery_table_info.contents[0].content[3]+'</td><td>'+delivery_table_info.contents[0].content[4]+'</td></tr></tfoot></table>';


  // 방법 1. 문자열 접합


  // 방법 2. 배열 join


  // 방법 3. 이스케이프(\)



})();

// ES6 //

// 템플릿 문자
// 백틱(backtick or backquote) 문자
// 보간법 ${expression}









/// Conclusion ////////////////////////////////////////////////////////////////

/**
 * ES6를 사용하여 프로젝트를 진행한다면?
 * template strings (template literal)
 * 참고: https://goo.gl/MFz9j8
 * ———————————————————————————————————————————————————————————
 *
 * 백틱 기호(`, backtick 또는 backquote)
 *  - 템플릿 구문을 읽기 쉽고, 작성이 용이하도록 만들어 줌.
 *  - 공백, 줄바꿈 허용.
 *  - 홑/쌍 따옴표를 자유롭게 사용 가능.
 *
 * 보간법(${}, string interpolation)
 *  - 포함된 JavaScript 식(Expression)을 처리하여 문자 데이터로 접합.
 *
 */