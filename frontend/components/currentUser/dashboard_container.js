import { connect } from 'react-redux';
import DashboardView from './dashboard';
import { fetchDashboard } from '../../actions/currentUser_actions';

const mapStateToProps = (state) => {
  return{
      currentUser: state.session.currentUser,
      friends: state.friends
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchDashboard: () => dispatch(fetchDashboard())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
