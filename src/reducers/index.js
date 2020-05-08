/*
 * @Author: your name
 * @Date: 2020-05-08 16:38:00
 * @LastEditTime: 2020-05-08 16:48:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/reducers/index.js
 */
import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'

const rootReducer = combineReducers({
  counter,
  user
})

export default rootReducer
