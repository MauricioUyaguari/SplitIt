import { connect } from 'react-redux';
import FriendsBillsIndex from './friends_bills_index';


const mapStateToProps = (state, { friendId }) => {
    return {
      friends: state.friends,
      bills: Object.values(state.bills),
      splits: Object.values(state.splits),
      friend: state.friends[friendId]
  };
};


export default connect(mapStateToProps, null)(FriendsBillsIndex);
