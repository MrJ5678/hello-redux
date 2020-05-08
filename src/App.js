/*
 * @Author: your name
 * @Date: 2020-04-11 21:43:44
 * @LastEditTime: 2020-05-08 10:05:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/App.js
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './App.css';

class App extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
        <p className="text-center">
          <button onClick={this.props.onIncrement} className="btn btn-primary mr-2">Increase</button>
          <button onClick={this.props.onDecrement} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

export default App;
