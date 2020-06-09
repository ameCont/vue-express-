<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>
    </v-layout>

      <!--
      <v-layout>
        <v-flex xs6>
          <panel title="YouTube Video">
          </panel>
        </v-flex>

      <v-flex xs6 class="ml-2">
        <panel title="Lyrics">
          <textarea
            readonly
            v-model="song.lyrics">
          </textarea>
        </panel>
      </v-flex>
    </v-layout>
    -->
  </div>
</template>

<script>
import SongMetadata from './SongMetadata'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    console.log('mounted')
    const songId = this.$store.state.route.params.songId
    console.log(songId)
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  },
  components: {
    Panel,
    SongMetadata
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
