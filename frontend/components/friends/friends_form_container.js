import { connect } from 'react-redux';
import FriendsForm from './friends_form';
import { createFriend, fetchSearchedUsers  } from '../../actions/friends_actions';




const mapStateToProps = (state, ownProps) => {
  return {
    friends: Object.values(state.friends),
    searchedUsers: Object.values(state.search)
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    createFriend: (user) => dispatch(createFriend(user)),
    fetchSearchedUsers: (query) => dispatch(fetchSearchedUsers(query))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FriendsForm);
