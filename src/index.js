/*
 * @Author: your name
 * @Date: 2020-04-11 21:43:44
 * @LastEditTime: 2020-05-08 10:01:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import reducer from './reducers/counter'

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <App 
      value={store.getState()}
      onIncrement={() => store.dispatch({
        type: 'INCREASE'
      })}
      onDecrement={() => store.dispatch({
        type: 'DECREASE'
      })}
    />,
    document.getElementById('root')
  )
}

render()

store.subscribe(render)


