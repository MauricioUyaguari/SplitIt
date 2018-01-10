import { connect } from 'react-redux';
import FriendsBillsIndex from './friends_bills_index';


const mapStateToProps = (state, { friendId }) => {
  
    return {
      friends: state.entities.friends,
      bills: Object.values(state.entities.bills),
      splits: Object.values(state.entities.splits),
      friend: state.entities.friends[friendId],
      currentUser: state.session.currentUser
  };
};


export default connect(mapStateToProps, null)(FriendsBillsIndex);
