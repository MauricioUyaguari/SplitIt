import merge from 'lodash/merge';
import { RECEIVE_SINGLE_FRIEND } from '../actions/friends_actions';

const splitsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_FRIEND:
    const splits = action.splits.reduce((acc, split) => {
      acc[split.id] = split;
      return acc;
    }, {});
  return merge({}, state, splits);
    default:
    return state;

  }



};


export default splitsReducer;
