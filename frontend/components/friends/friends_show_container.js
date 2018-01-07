import { connect } from 'react-redux';
import FriendsShow from './friends_show';
import { fetchAllFriends, fetchSingleFriend } from '../../actions/friends_actions';

const mapStateToProps = (state, { match }) => {


  const friendId = parseInt(match.params.friendId);
  const friend = state.friends[friendId];
  return {
    friends: state.friends,
    friend,
    friendId
  };
};



// add later to pass down the friend show page
const mapDispatchToProps = dispatch => {
  return {
    fetchFriends: () => dispatch(fetchAllFriends()),
    fetchSingleFriend: (id) => dispatch(fetchSingleFriend(id))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(FriendsShow);
