<template>
  <div class="bg-video">
    <p>{{message}}</p>
    <iframe width="560" height="315" :src="ytdSource" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'BgVideo',
  props: [],
  props: {
    message: {
      type: String
    }
  },
  data() {
    return  {
      url: 'x0r_7koevhw'
    }
  },
  computed: {
    ytdSource() {
      return `https://www.youtube.com/embed/${this.url}`;
    }
  }
}
</script>

