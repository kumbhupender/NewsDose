import React, { Component } from 'react';
import loading from '../loading.gif.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center fs-1 d-flex justify-content-center'>
        <img className='my-' src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
