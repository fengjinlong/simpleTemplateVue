import axios from './axios'
export default (url = '', data = {}, type = 'GET') => {
  type = type.toUpperCase()
  return new Promise((resolve, reject) => {
    if (type === 'POST') {
      axios.post(url, data).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
    } else {
      axios.get(url, {
        params: data
      }).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
    }
  })
}
