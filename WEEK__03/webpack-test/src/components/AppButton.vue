<template>
  <div>
    <div>부모의 속성 값: {{ msg }}</div>
    <button
      @click="notiToParent"
      type="button"
      class="app-button">{{content}}</button>
  </div>
</template>

<script>
export default {
  name: 'AppButton',
  // props: ['msg'],
  props: {
    msg: {
      type: String,
      default: '기본 값'
    }
  },
  // mounted () {
  //   this.msg = this.$parent.msg;
  // },
  data(){
    return {
      content: '앱 버튼',
      // msg: ''
    }
  },
  methods: {
    notiToParent(){
      // this.msg = '부모의 동의 없이 함부로 변경하면 안되요';
      // 부모에게 알려야 해요
      this.$emit('noti', '부모의 동의 없이 함부로 변경하면 안되요');
    }
  }
}
</script>

<style>
  .app-button {
    border: none;
    padding: 1em;
    background: #333333;
    color: #fff;
    border-radius: 6px;
  }
</style>


