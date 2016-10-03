import { createStore, compose } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import DevTools from '../containers/DevTools';

import rootReducer from '../reducers/';

const initialState = {
  app: {
    clickCount: 0,
    target: null
  }
};

export default createStore(
  rootReducer,
  initialState,
  compose(
    responsiveStoreEnhancer,
    DevTools.instrument()
  )
);
