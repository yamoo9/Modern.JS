/*! vue.component.js © yamoo9.net, 2017 */

// Vue Component 정의 방법
// 전역 정의
// 컴포넌트의 이름은 커스텀 엘리먼트 이름이 된다.
// <comp-name></comp-name>
Vue.component('tabs', {
  template: `
    <div class="tabs">
      <ul role="tablist">
        <slot></slot>
      </ul>
    </div>
  `
});

Vue.component('tab', {
  // 컴포넌트 정의
  // 부모 컴포넌트로부터 속성 전달
  props: ['control'],
  // 템플릿 설정
  template: `
    <li role="presentation">
      <a role="tab" class="tab" href> <slot></slot> </a>
    </li>
  `,
  methods: {
    tabActive: function() {
      console.log('tab activation');
    }
  }
});

// 특정 컴포넌트 내에 종속(지역 정의)
var app = new Vue({
  el: '#app'
});
