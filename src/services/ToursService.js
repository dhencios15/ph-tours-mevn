import Api from './Api'

export default {
  GET_ALL_TOURS(query) {
    return Api().get('tours', query)
  },
  GET_TOUR(tourId) {
    return Api().get(`tours/${tourId}`)
  }
}
