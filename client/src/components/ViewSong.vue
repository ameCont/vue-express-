<!--
<template>

</template>
-->

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    console.log('mounted')
    const songId = this.$store.state.route.params.songId
    console.log(songId)
    this.song = await SongsService.show(songId)
    console.log(this.song)
  }
}
</script>

<style scoped>
</style>
