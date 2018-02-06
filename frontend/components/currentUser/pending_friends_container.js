import { connect } from 'react-redux';
import PendingFriendsView from './pending_friends';
import { approveFriendship } from '../../actions/friends_actions';

const mapStateToProps = (state) => {
  return {
    pendingFriends: state.session.currentUser.pending_friends
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    approveFriendship: (id) => dispatch(approveFriendship(id))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(PendingFriendsView);
