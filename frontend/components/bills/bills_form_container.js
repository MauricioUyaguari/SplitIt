import { connect } from 'react-redux';
import { createBill } from '../../actions/bills_actions';
import BillsForm from './bills_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  let friendId = ownProps.match.params.friendId;
  return {
  currentUser: state.session.currentUser,
  friend: state.entities.friends[friendId]
} ;
};


const mapDispatchToProps = (dispatch) => {
  return {
    createBill: (bill) => dispatch(createBill(bill))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BillsForm));
