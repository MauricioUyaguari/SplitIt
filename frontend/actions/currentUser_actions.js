import * as CurrentUserApiUtil from '../util/currentUser_api_util';



export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD';




export const receiveDashboard = (dashboard) => {

  return{
    type: RECEIVE_DASHBOARD,
    currentUser: dashboard.current_user,
    friends: dashboard.friends,
    bills: dashboard.bills,
    pending_friends: dashboard.pending_friends
  };
};




export const fetchDashboard = () => dispatch => {

  return CurrentUserApiUtil.fetchDashboard().then(dashboard => {
    return dispatch(receiveDashboard(dashboard));
  });
};
