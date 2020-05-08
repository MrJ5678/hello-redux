/*
 * @Author: your name
 * @Date: 2020-05-08 09:37:29
 * @LastEditTime: 2020-05-08 10:01:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/reducers/counter.js
 */
const counter = (state = 0, action = {}) => {
  switch(action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    default: return state;
  }
}

export default counter;