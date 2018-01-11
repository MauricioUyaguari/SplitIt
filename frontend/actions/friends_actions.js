import * as FriendApiUtil from '../util/friend_api_util';


export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_SINGLE_FRIEND = 'RECEIVE_SINGLE_FRIEND';
export const RECEIVE_SEARCHED_USERS = 'RECEIVE_SEARCHED_USERS';

export const receiveAllFriends = (friends) => {
  return{
    type: RECEIVE_ALL_FRIENDS,
    friends
  };
};

export const receiveSingleFriend = (friendData) => {

  return {
    type: RECEIVE_SINGLE_FRIEND,
    friend: friendData.friend,
    bills: friendData.bills,
    splits: friendData.splits,
    transactions: friendData.transactions,
    comments: friendData.comments
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
    return dispatch(receiveSingleFriend(friend));
  });
};

export const fetchSearchedUsers = (query) => dispatch => {
  return FriendApiUtil.searchUsers(query).then(users => {
    return dispatch(receiveSearchedUsers(users));
  });
};



export const fetchSingleFriend = (id) => dispatch => {
  return FriendApiUtil.fetchSingleFriend(id).then(friend => {
    return dispatch(receiveSingleFriend(friend));
  });
};
