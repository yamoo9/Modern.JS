<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 @click="showMe">{{ msg }}</h1>
    <app-button @noti="changeMsg" :msg="msg"></app-button>
  </div>
</template>

<script>
import AppButton from './components/AppButton.vue';

export default {
  name: 'app',
  components: {
    AppButton
  },
  data () {
    return {
      msg: 'VueJS 애플리케이션'
    }
  },
  methods: {
    showMe(){
      this.msg = '날 봐';
    },
    changeMsg(value){
      this.msg = value;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
