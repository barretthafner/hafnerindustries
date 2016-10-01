import { createStore, combineReducers } from 'redux';

import app from './reducers/';

const rootReducer = combineReducers({
  app
});

const initialState = {
  app: {
    clickCount: 0,
    target: null
  }
};

export const store = createStore(rootReducer, initialState);
