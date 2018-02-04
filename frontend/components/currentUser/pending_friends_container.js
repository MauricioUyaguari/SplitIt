import { connect } from 'react-redux';
import PendingFriendsView from './pending_friends';


const mapStateToProps = (state) => {
  return {
    pendingFriends: state.session.currentUser.pending_friends
  };
};





export default connect(mapStateToProps, null)(PendingFriendsView);
