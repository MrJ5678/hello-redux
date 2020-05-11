/*
 * @Author: your name
 * @Date: 2020-05-11 12:09:18
 * @LastEditTime: 2020-05-11 12:32:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/store/configureStore.dev.js
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer, 
    preloadedState, 
    composeWithDevTools(
      applyMiddleware(
        logger, 
        thunk, 
        promise
      )
    )
  )
  
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
