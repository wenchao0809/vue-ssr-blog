import axios from 'axios'
// if (process.server) {
//   axios.defaults.baseURL = 'http://localhost'
// }
if (process.server) {
  console.log(process.env.HOST)
  axios.defaults.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}
export default 'axios'
