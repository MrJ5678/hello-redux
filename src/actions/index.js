/*
 * @Author: your name
 * @Date: 2020-05-09 10:08:06
 * @LastEditTime: 2020-05-11 10:16:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/actions/index.js
 */
import axios from 'axios'
import { INCREMENT, DECREMENT } from '../constant'

import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE } from '../constant'

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const get_users = () => {
  return dispatch => {
    dispatch(fetch_user_request())
    axios.get('https://randomuser.me/api/')
    .then(res => {
      dispatch(fetch_user(res.data.results[0]))
    })
    .catch(error => {
      dispatch(fetch_user_failure(error.response.data))
    })
  }
}

export const fetch_user = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }
}

export const fetch_user_request = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetch_user_failure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    error
  }
}