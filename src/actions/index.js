/*
 * @Author: your name
 * @Date: 2020-05-09 09:47:50
 * @LastEditTime: 2020-05-09 10:02:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/actions/index.js
 */
import { INCREMENT, DECREMENT } from '../constant'

export const increment = (name) => {
  return {
    type: INCREMENT,
    name
  }
}

export const decrement = (name) => {
  return {
    type: DECREMENT,
    name
  }
}
