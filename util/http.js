import axios from 'axios'

if (process.SERVER_BUILD) {
  axios.defaults.baseURL = 'http://estding.com:3000'
}
export default axios
