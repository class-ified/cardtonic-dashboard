import {combineReducers} from 'redux';

import authReducer from './auth.reducer';
import miscReducer from './misc.reducer';
import userReducer from './user.reducer';

const RootReducer = combineReducers({
  auth: authReducer,
  misc: miscReducer,
  user: userReducer,
});

export default RootReducer;
