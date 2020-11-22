import axios from 'axios'
import cookies from 'vue-cookies'

// const prodURL = 'https://calm-ocean-73108.herokuapp.com/api/v1/'

export default () => {
  return axios.create({
    baseURL: `http://localhost:3000/api/v1/`,
    headers: {
      Authorization: `Bearer ${cookies.get('jwt')}`
    }
  })
}
