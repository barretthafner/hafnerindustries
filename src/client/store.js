import { createStore, combineReducers } from 'redux';

import app from './reducers/';

const rootReducer = combineReducers({
  app
});

const initialState = {
  clickCount: 0
};

export const store = createStore(rootReducer, initialState);
