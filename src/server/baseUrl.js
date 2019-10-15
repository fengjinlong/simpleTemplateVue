
let baseUrl
let imgBaseUrl
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://210.12.23.78:9010'
    // baseUrl = 'http://110.1.1.151:8080'
    // imgBaseUrl = 'http://teststatic.xuehuiwang.com'
    break
  case 'test':
    baseUrl = 'http://210.12.23.78:9010'
    // imgBaseUrl = 'http://teststatic.xuehuiwang.com'
    break
  case 'production':
    baseUrl = 'http://api.html5.zhishilong.com' // 生产环境url
    // imgBaseUrl = 'http://static.zhishilong.com'
    break
}
let url = {
  baseUrl,
  imgBaseUrl
}

export default url
