import { combineReducers } from 'redux';
import app from './appReducer';

import {responsiveStateReducer} from 'redux-responsive'

export default combineReducers({
  app,
  ui: responsiveStateReducer
});
