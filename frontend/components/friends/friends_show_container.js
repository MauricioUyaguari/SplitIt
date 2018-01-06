import { connect } from 'react-redux';
import FriendsShow from './friends_show';
import { fetchAllFriends } from '../../actions/friends_actions';

const mapStateToProps = (state, { match }) => {


  const friendId = parseInt(match.params.friendId);
  const friend = state.friends[friendId];




  return {
    friends: state.friends,
    friend
  };
};



// add later to pass down the friend show page
const mapDispatchToProps = dispatch => {
  return {
    fetchFriends: () => dispatch(fetchAllFriends())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(FriendsShow);
