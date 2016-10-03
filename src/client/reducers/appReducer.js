import { types } from '../actions';

export default function reducer(state = {}, action) {

  console.log('reducer called! \naction:', action.type);

  switch (action.type) {

    case types.clickTest:
      return Object.assign(state, action.payload, { clickCount: state.clickCount + 1 });

    case types.changeLocation:
      return Object.assign(state, action.payload);

    default:
      return state;
  }
}
