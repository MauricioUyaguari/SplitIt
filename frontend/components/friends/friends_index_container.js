import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { fetchAllFriends, createFriendship } from '../../actions/friends_actions';


const mapStateToProps = (state) => {
  return {
    friends: Object.values(state.entities.friends)
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    fetchFriends: () => dispatch(fetchAllFriends()),
    createFriendship: (user) => dispatch(createFriendship(user))
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex);
