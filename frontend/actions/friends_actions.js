import * as FriendApiUtil from '../util/friend_api_util';


export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const RECEIVE_SEARCHED_USERS = 'RECEIVE_SEARCHED_USERS';

export const receiveAllFriends = (friends) => {
  return{
    type: RECEIVE_ALL_FRIENDS,
    friends
  };
};

export const receiveFriend = (friend) => {
  return {
    type: RECEIVE_FRIEND,
    friend
  };
};

export const receiveSearchedUsers = (users) => {
  return {
    type: RECEIVE_SEARCHED_USERS,
    users
  };
};



export const fetchAllFriends = () => dispatch => {
  return FriendApiUtil.fetchFriends().then(friends => {
    return dispatch(receiveAllFriends(friends));
  });
};

export const createFriend = (user) => dispatch => {
  return FriendApiUtil.createFriend(user).then(friend => {
    return dispatch(receiveFriend(friend));
  });
};

export const fetchSearchedUsers = (query) => dispatch => {
  return FriendApiUtil.searchUsers(query).then(users => {
    return dispatch(receiveSearchedUsers(users));
  });
};
