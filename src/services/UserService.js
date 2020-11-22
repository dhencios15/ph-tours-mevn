import Api from './Api'

export default {
  updateUser(credentials) {
    return Api().patch('users/updateMe', credentials)
  },
  updatePassword(credentials) {
    return Api().post('users/signup', credentials)
  }
}
