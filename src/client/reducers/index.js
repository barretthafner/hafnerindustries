import * as actions from '../actions';
import store from '../store';

export default function reducer(state = {}, action) {

  console.log('reducer called! \naction:', action.type);

  switch (action.type) {

    case actions._clickTest:
      return Object.assign(state, action.payload, { clickCount: state.clickCount + 1 });

    default:
      return state;
  }
}
