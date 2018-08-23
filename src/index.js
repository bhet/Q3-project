import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { fetchCamera } from './redux/action/cameraAction';
import { Provider } from 'react-redux';

const newStore = store();

newStore.dispatch(fetchCamera());


ReactDOM.render(<Provider store={newStore}><App /></Provider>,
  document.getElementById('root'));
