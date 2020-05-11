/*
 * @Author: your name
 * @Date: 2020-05-08 16:37:16
 * @LastEditTime: 2020-05-11 10:16:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/reducers/user.js
 */
import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE } from '../constant'

const initialState = {
  isFetching: false,
  error: null,
  user: {}
}

const user = (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...initialState,
        isFetching: true
      }
    case FETCH_USER_FAILURE:
      return {
        ...initialState,
        error: action.error
      }
    case FETCH_USER_SUCCESS:
      return {
        ...initialState,
        user: action.user
      }
    default: return state;
  }
}

export default user;