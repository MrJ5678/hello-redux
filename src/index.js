/*
 * @Author: your name
 * @Date: 2020-04-11 21:43:44
 * @LastEditTime: 2020-05-08 16:42:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'


const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
