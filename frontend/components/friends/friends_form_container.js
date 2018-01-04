import { connect } from 'react-redux';
import FriendsForm from './friends_form';
import { createFriend } from '../../actions/friend_actions';




const mapStateToProps = (state) => {
  return {
    friends: Object.values(state.friends)
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    createFriend: (user) => mapDispatchToProps
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FriendsForm);
