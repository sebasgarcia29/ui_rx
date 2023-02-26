/*
 * Import and combine all the reducers, to pass them to store configurator
 */
import { combineReducers } from 'redux';

import { AuthReducer } from './reducers/index';

const rootReducer = combineReducers({
  AuthReducer,
});

export default rootReducer;