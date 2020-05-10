/*
 * @Author: your name
 * @Date: 2020-05-08 09:37:29
 * @LastEditTime: 2020-05-10 08:20:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/reducers/counter.js
 */
const counter = (state = 1, action = {}) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default: return state;
  }
}

export default counter;