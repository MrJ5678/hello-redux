/*
 * @Author: your name
 * @Date: 2020-05-11 12:08:54
 * @LastEditTime: 2020-05-11 12:11:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/store/index.js
 */
if(process.env.NODE_ENV === "production") {
  module.exports = require('./configureStore.prod')
}else {
  module.exports = require('./configureStore.dev')
}
