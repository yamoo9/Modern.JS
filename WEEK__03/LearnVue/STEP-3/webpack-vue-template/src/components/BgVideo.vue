<template>
  <div class="bg-video">
    <p>{{message}}</p>
    <iframe
      width="560"
      height="315"
      :src="ytdSource"
      gesture="media"
      allow="encrypted-media"
      allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'BgVideo',
  props: {
    url: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: 'BgVideo'
    }
  },
  data() {
    return  {}
  },
  computed: {
    ytdSource() {
      return `https://www.youtube.com/embed/${this.url}`;
    }
  }
}
</script>

<style scoped>
iframe {
  border: 0;
}
</style>

