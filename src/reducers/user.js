/*
 * @Author: your name
 * @Date: 2020-05-08 16:37:16
 * @LastEditTime: 2020-05-11 11:40:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/reducers/user.js
 */
// import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE } from '../constant'

import { LOAD_USER_PENDING, LOAD_USER_FULFILLED, LOAD_USER_REJECTED } from '../constant'
const initialState = {
  isFetching: false,
  error: null,
  user: {}
}

const user = (state = initialState, action = {}) => {
  switch(action.type) {
    case LOAD_USER_PENDING:
      return {
        ...initialState,
        isFetching: true
      }
    case LOAD_USER_REJECTED:
      return {
        ...initialState,
        error: action.payload.response.data
      }
    case LOAD_USER_FULFILLED:
      console.dir(action)
      return {
        ...initialState,
        user: action.payload.data.results[0]
      }
    default: return state;
  }
}

export default user;