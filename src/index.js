/*
 * @Author: your name
 * @Date: 2020-04-11 21:43:44
 * @LastEditTime: 2020-05-09 16:47:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const logger = store => next => action => {
  console.log('dispatching', action.type)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const error = store => next => action => {
  try {
    next(action)
  } catch (error) {
    console.log('reducer执行出错:' + error)
  }
}

const store = createStore(rootReducer, {}, applyMiddleware(logger, error))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
