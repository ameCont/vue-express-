<template>
  <panel title="YouTube Video">
    <youtube
    :video-id="youtubeId"
    :player-width="800"
    :player-height="400">
    </youtube>
  </panel>
</template>

<script>
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
