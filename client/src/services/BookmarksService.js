import Api from '@/services/Api'

export default {
  index (bookmark) {
    /*
    return Api().get('bookmarks', {
      params: bookmark
    })
    */
    return Api().get('bookmarks', bookmark)
  },
  post (bookmark) {
    return Api().post('bookmarks', {
      params: bookmark
    })
    // return Api().post('bookmarks', bookmark)
  },
  delete (bookmarkId) {
    return Api().get(`bookmarks/${bookmarkId}`)
  }
}
