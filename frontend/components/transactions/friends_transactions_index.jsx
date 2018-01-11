import React from 'react';
import { transactionsSort } from '../../util/functions';

class FriendsTransactionsIndex extends React.Component {

  constructor(props){
    super(props);
  }



  renderSingleTansaction(transaction){
    const date = new Date (transaction.created_at);
    const dateString = date.toDateString();
    const second = date.toLocaleString();
    const { currentUser, friend } = this.props;
    const payer = (transaction.payer_id === currentUser.id) ? currentUser : friend;
    const loaner = (transaction.loaner_id === currentUser.id) ? currentUser : friend;
    return(
      <div key={transaction.id}>
        {payer.email} paid {loaner.email} ${transaction.amount_payed} on {second}
      </div>
    );

  }


  friendtransactions(){
    const {transactions, friend} = this.props;
    const result = [];
    transactions.forEach((transaction) => {
      if(friend.transactions_id.includes(transaction.id)){
        result.push(transaction);
      }
    }
  );
  return transactionsSort(result);
  }


  renderTransactions(){
    if(this.props.friend.transactions_id == undefined){
      return null;
    }

    const transactions = this.friendtransactions();
    return (
      transactions.map( transaction =>
        this.renderSingleTansaction(transaction)

      )
    );
  }


  render(){

    return(
      <div>
        {this.renderTransactions()}
      </div>
    );

  }
}



export default FriendsTransactionsIndex;
