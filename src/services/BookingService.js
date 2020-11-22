import Api from './Api'

export default {
  BOOK_TOUR(tourId) {
    return Api().get(`bookings/checkout-session/${tourId}`)
  }
}
