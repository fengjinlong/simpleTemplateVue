import fetch from '@/server/request'

// 点击课程查询课程详情
const login = (data) => fetch('/login', data)



// export const findCom = (content, tarName) => {
//   let parent = content.$parent
//   let name = parent.$options.name
//   while (parent && (!name || tarName !== name)) {
//     parent = parent.$parent
//     if (parent) {
//       name = parent.$options.name
//     }
//   }
//   return parent
// }

let req = {
  login
}

export default req
