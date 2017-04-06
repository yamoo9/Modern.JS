/*! vue.component.js © yamoo9.net, 2017 */

// Vue Component 정의 방법
// 전역 정의
// 컴포넌트의 이름은 커스텀 엘리먼트 이름이 된다.
// <app-tabs></app-tabs>
Vue.component('tabs', {
  template: `
    <div class="tabs">
      <ul role="tablist">
        <slot></slot>
      </ul>
    </div>
  `,
  data: function() {
    return {
      active: 0
    };
  },
  methods: {
    processActive: function(i) {
      console.log(i);
    }
  }
});

Vue.component('tab', {
  // 컴포넌트 정의
  // 부모 컴포넌트로부터 속성 전달
  props: ['item', 'index'],
  // 템플릿 설정
  template: `
    <li role="presentation">
      <a
        @click.prevent="tabActive(index)"
        role="tab" href> {{item}} </a>
    </li>
  `,
  data: function() {
    return {}
  },
  methods: {
    tabActive: function(index) {
      // console.log(index);
      this.$emit('active', index);
      // a 를 사용자가 클릭했을 때
      // 부모 li에 .is-active 상태 클래스를 적용
    }
  }
});

// 특정 컴포넌트 내에 종속(지역 정의)
var app = new Vue({
  el: '#app',
  data: {
    tabs: [
      'Computer',
      'IA',
      'AI',
      'IOT',
      'IT',
    ]
  }
});
