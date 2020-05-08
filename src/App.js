/*
 * @Author: your name
 * @Date: 2020-04-11 21:43:44
 * @LastEditTime: 2020-05-08 16:45:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/App.js
 */
import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css';

class App extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    user: PropTypes.string
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <h1 className="jumbotron-heading text-center">{this.props.user}</h1>
        <p className="text-center">
          <button className="btn btn-primary mr-2">Increase</button>
          <button className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    counter: state.counter,
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
