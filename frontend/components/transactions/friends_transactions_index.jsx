import React from 'react';
import { transactionsSort, monthDayYearDateFormat  } from '../../util/functions';

class FriendsTransactionsIndex extends React.Component {

  constructor(props){
    super(props);
  }



  renderSingleTansaction(transaction){
    const date = new Date (transaction.created_at);
    const dateString = monthDayYearDateFormat(date);
    const { currentUser, friend } = this.props;
    const payer = (transaction.payer_id === currentUser.id) ? "You" : friend.email;
    const loaner = (transaction.loaner_id === currentUser.id) ? "you" : friend.email;
    return(
      <li className="trans-li" key={transaction.id}>
        <div>{payer} paid {loaner}
         <span className={(payer ==="You") ? "neg-money" : "pos-money" }> ${transaction.amount_payed} </span></div>
         <div>on {dateString}</div>
      </li>
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
      <div className="transactions-index">
        <div className="trans-index-details-label"> Transactions Details</div>
        <ul>
        {this.renderTransactions()}
        </ul>
      </div>
    );

  }
}



export default FriendsTransactionsIndex;
