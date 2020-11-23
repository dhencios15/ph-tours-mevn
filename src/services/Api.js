import axios from 'axios'
import cookies from 'vue-cookies'

const prodURL = 'https://calm-ocean-73108.herokuapp.com/api/v1/'

export default () => {
  return axios.create({
    baseURL: prodURL,
    headers: {
      Authorization: `Bearer ${cookies.get('jwt')}`
    }
  })
}
