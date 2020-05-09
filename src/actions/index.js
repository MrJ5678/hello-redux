/*
 * @Author: your name
 * @Date: 2020-05-09 10:08:06
 * @LastEditTime: 2020-05-09 10:12:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/actions/index.js
 */
import { INCREMENT, DECREMENT } from '../constant'

export const increment = (id) => {
  return {
    type: INCREMENT,
    id
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}