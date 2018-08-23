import { createStore, applyMiddleware, combineReducers } from 'redux';
import cameras from './reducer/cameraReducer';
import cartItems from './reducer/cartReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let middleware = [thunk, logger];

const rootReducer = combineReducers({cameras, cartItems });
export default () => createStore(rootReducer, applyMiddleware(...middleware))
