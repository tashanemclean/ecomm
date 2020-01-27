import { combineReducers } from 'redux';
import {reducer as form } from 'redux-form';

import headerNavbar from './headernavbarReducer';
import user from './userReducer';
import Shop from './shopReducer';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user,
  Shop
})

export default rootReducer