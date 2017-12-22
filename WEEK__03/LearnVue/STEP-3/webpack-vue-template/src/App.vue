<template>
  <div id="app">
    <bg-video url="x0r_7koevhw" :message="msg"></bg-video>
  </div>
</template>

<script>

  import BgVideo from './components/BgVideo.vue';

  export default {
    name: 'app',
    components: { BgVideo },
    data () {
      return {
        msg: '공부하기 쉬워요~ Vue~~'
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
    color: #eb6238;
    margin-top: 120px;
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
