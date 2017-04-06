<template>
  <div id="app">
    <app-brand :name="app_name"></app-brand>
  </div>
</template>

<script>
import AppBrand from './components/appBrand.vue'

export default {
  name: 'app',
  components: {
    appBrand: AppBrand
  },
  data () {
    return {
      app_name: 'Vue JS App'
    }
  }
}
</script>

<style lang="sass">

body
  margin: 3rem
  font-size: 2rem

</style>
