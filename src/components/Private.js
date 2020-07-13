import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Private extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container mt-5'>
        <h2>
          You have logged in your Account. Your authorization is complete...
        </h2>
        <Link
          className='btn btn-dark'
          to='/'
          onClick={() => {
            localStorage.removeItem('jwt-token');
          }}
        >
          Log Out
        </Link>
      </div>
    );
  }
}
/**
 * 
 *   if (this.state.loggedIn === false) {
      return <Redirect to='/' />;
    }

 * 
   const token = localStorage.getItem('jwt-token');
    let loggedIn = true;

    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
    }; */
