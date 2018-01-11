import { connect } from 'react-redux';
import FriendsTransactionsIndex from './friends_transactions_index';



const mapStateToProps = (state, { friend }) => {
  return {
    transactions: Object.values(state.entities.transactions),
    bills: Object.values(state.entities.bills),
    currentUser: state.session.currentUser,
    friend
  };
};





export default connect(mapStateToProps, null)(FriendsTransactionsIndex);
