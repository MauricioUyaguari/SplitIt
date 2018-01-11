import { connect } from 'react-redux';
import { fetchDashboard } from '../../actions/currentUser_actions';
import AllTransactionsView from './all_transactions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    friends: state.entities.friends
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchDashboard: () => dispatch(fetchDashboard())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AllTransactionsView);
