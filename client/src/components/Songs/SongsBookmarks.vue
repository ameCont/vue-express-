<template>
  <panel title="Bookmarks">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template slot="items" scope="props">
        <td class="text-xs-right">

        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
export default {
  data () {
    return {
      headers: [
          {
            text: 'Title',
            value: 'title'
          },
          {
            text: 'Artist',
            value: 'artist'
          }
      ],
      pagination: {
        sortBy: 'date',
        descending: true
      },
      bookmarks: [
        {
          title: 'hello world',
          artist: 'Testing'
        },
        {
          title: 'hello world',
          artist: 'Testing'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>