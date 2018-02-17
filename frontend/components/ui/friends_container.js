import { connect } from 'react-redux';
import FriendsUIRender from './friends';


const mapStateToProps = (state) => {
  return {
    uiFriend: Object.values(state.ui.uiFriend)
  };
};



const mapDispatchToProps = (dispatch) => {



};



export default connect(mapStateToProps, mapDispatchToProps)
