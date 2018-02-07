import { connect } from 'react-redux';
import FriendsForm from './friends_form';
import { createFriendship, fetchSearchedUsers  } from '../../actions/friends_actions';




const mapStateToProps = (state, ownProps) => {
  return {
    friends: Object.values(state.entities.friends),
    searchedUsers: Object.values(state.entities.search)
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    createFriendship: (user) => dispatch(createFriendship(user)),
    fetchSearchedUsers: (query) => dispatch(fetchSearchedUsers(query))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FriendsForm);
