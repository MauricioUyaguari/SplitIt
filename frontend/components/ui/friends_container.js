import { connect } from 'react-redux';
import FriendsUIRender from './friends';
import { clearUiMessage } from '../../actions/friends_actions';

const mapStateToProps = (state) => {
  return {
    uiFriend: Object.values(state.ui.uiFriend)
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    clearUiMessage: () => dispatch(clearUiMessage())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(FriendsUIRender);
