import { createStore, applyMiddleware, combineReducers } from 'redux';
import cameras from './reducer/cameraReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let middleware = [thunk, logger];

const rootReducer = combineReducers({cameras });
export default () => createStore(rootReducer, applyMiddleware(...middleware))
