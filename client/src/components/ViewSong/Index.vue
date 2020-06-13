<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :song="song"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    console.log('mounted')
    const songId = this.$store.state.route.params.songId
    // console.log(songId)
    this.song = (await SongsService.show(songId)).data
    // console.log(this.song)

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        SongId: songId
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
