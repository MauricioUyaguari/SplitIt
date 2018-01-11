import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createTransaction } from '../../actions/transactions_actions';
import TransactionsForm from './transactions_form';

const mapStateToProps = (state, ownProps) => {
  
  let friendId = ownProps.match.params.friendId;
  return {
    friends: Object.values(state.entities.friends),
    transactions: Object.values(state.entities.transactions),
    currentUser: state.session.currentUser,
    friend: state.entities.friends[friendId]
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    createTransaction: (transaction) => dispatch(createTransaction(transaction))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionsForm));
