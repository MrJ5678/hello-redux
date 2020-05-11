/*
 * @Author: your name
 * @Date: 2020-05-11 12:09:32
 * @LastEditTime: 2020-05-11 12:25:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/store/configureStore.prod.js
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(
      thunk, 
      promise
    )
  )
  return store
}

export default configureStore