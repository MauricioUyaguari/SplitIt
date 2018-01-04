import * as FriendApiUtil from '../util/friend_api_util';




export const RECEIVE_FRIENDS_SEARCHED = 'RECEIVE_FRIENDS_SEARCHED';


export const receiveFriendsSearched = (friends) => {
  return {
    type: RECEIVE_FRIENDS_SEARCHED,
    friends
  };
};


export const fetchFriendsSearch = (inputString) => {

}
