import axios from 'axios'
import qs from 'qs'
import URL from './baseUrl'
let CancelToken = axios.CancelToken // 取消请求
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = URL.baseUrl


axios.defaults.timeout = 20000

axios.interceptors.request.use(config => {
  // let token = store.getters.token
  let requestName = config.url
  if (requestName) {
    if (axios[requestName] && axios[requestName].cancel) {
      axios[requestName].cancel()
    }
    config.cancelToken = new CancelToken(c => {
      axios[requestName] = {}
      axios[requestName].cancel = c
    })
  }
  // config.headers.Authorization = token
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(config => {
  return config
}, error => {
  if (error && error.response) {
    
    switch (error.response.status) {
      case 10016:
       
				break;
      case 10015:
      
				break;
			case 10014:
      
				break;
      case 10013:
      
				break;
			case 10012:
       
				break;
			case 10011:
        
				break;
			case 10010:
			
				break;
			default:console.log
			console.log('err')
    }
  } else {
    error.message = '连接到服务器失败'
  }
  return Promise.reject(error.message)
})
export default axios
