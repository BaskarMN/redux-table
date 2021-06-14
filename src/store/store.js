import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers';

const middleware = [thunk];
console.log('midd', middleware)

export default createStore(appReducer, applyMiddleware(...middleware));