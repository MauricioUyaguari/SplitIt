import { connect } from 'react-redux';
import { fetchDashboard } from '../../actions/currentUser_actions';
import ActivityView from './activity';
const mapStateToProps = (state) => {
return{
  currentUser: state.session.currentUser,
  friends: state.friends,
  bills: state.bills
};

};

const mapDispatchToProps = dispatch => {
  return{
    fetchDashboard: () => dispatch(fetchDashboard())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityView);
