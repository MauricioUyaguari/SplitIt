import { connect } from 'react-redux';
import PendingFriendsView from './pending_friends';
import { approveFriendship } from '../../actions/friends_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  
  return {
    pendingFriends: state.session.currentUser.pending_friends
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    approveFriendship: (id) => dispatch(approveFriendship(id))
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PendingFriendsView));
