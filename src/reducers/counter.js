/*
 * @Author: your name
 * @Date: 2020-05-08 09:37:29
 * @LastEditTime: 2020-05-09 16:02:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/reducers/counter.js
 */
const counter = (state = 1, action = {}) => {
  switch(action.type) {
    case 'INCREMENT':
      console.log(action.id)
      return state + 1
    case 'DECREMENT':
      console.log(action.id)
      return state - 1
    default: return state;
  }
}

export default counter;