import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('bookmarks', {
      params: params
    })
  },
  /*
  index (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },

    post (bookmark) {
    return Api().post('bookmarks', {
      params: bookmark
    })
  },

  */

  post (bookmark) {
    return Api().post('bookmarks', bookmark)
  },
  delete (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
