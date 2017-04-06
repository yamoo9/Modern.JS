<template>
  <h1 class="app-brand is-active">{{name}}</h1>
</template>

<script>
  export default {
    props: ['name'],
    data() {
      return {

      }
    }
  }
</script>

<style lang="sass" scoped>
$brand-color: #fc414b

.app-brand
  font-family: "Helvetica Neue"
  color: $brand-color
</style>
