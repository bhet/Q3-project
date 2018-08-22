import React, { Component } from 'react';
import CameraList from "./CameraList";
import FilterCamera from './FilterCamera';
import Cart from './cart';

class Main extends Component {
  render () {

    return (
      <div>
        <FilterCamera />
        <Cart />
        <CameraList />
      </div>
    )
  }
}

export default Main;
