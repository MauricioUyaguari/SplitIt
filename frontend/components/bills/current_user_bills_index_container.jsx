import { connect } from 'react-redux';
import { fetchAllBills } from '../../actions/bills_actions';
import CurrentUserBillsIndex from './current_user_bills_index.jsx';



const mapStateToProps = (state) => {

  return {
    bills: Object.values(state.entities.friends)
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBills: () => dispatch(fetchAllBills())
  };
};
