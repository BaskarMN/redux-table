import { combineReducers } from 'redux';
import user from './userReducer';

// to combine all reducers together
const appReducer = combineReducers({ 
  user
});

console.log('appp', appReducer)

export default appReducer;