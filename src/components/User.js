/*
 * @Author: your name
 * @Date: 2020-05-10 10:17:56
 * @LastEditTime: 2020-05-11 10:07:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-redux-review/src/components/User.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_users } from '../actions'

class User extends Component {
  render() {
    const { get_users } = this.props
    const { user, isFetching, error  } = this.props.user
    let data

    if(error) {
      data = error
    }else if(isFetching) {
      data = 'Loading'
    }else {
      data = user.email
    }

    return (
      <div>
        <h1 className="jumbotron-heading text-center">{ data }</h1>
        <p className="text-center">
          <button onClick={ () => get_users() } className="btn btn-success mr-2">Get Random email</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { get_users })(User);