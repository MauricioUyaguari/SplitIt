import merge from 'lodash/merge';


export const loggedInErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
    return state;
  }
};


export default loggedInErrorsReducer ;
