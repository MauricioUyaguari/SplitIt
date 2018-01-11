import React from 'react';


class FriendsTransactionsIndex extends React.Component {

  constructor(props){
    super(props);
  }



  renderSingleTansaction(transaction){
    const date = new Date (transaction.created_at);
    const dateString = date.toDateString()
    const second = date.toLocaleString()
    const { currentUser, friend } = this.props;
    const payer = (transaction.payer_id === currentUser.id) ? currentUser : friend;
    const loaner = (transaction.loaner_id === currentUser.id) ? currentUser : friend;
    return(
      <div key={transaction.id}>
        {payer.email} paid {loaner.email} ${transaction.amount_payed} on {second}
      </div>
    );

  }


  renderTransactions(){
    // debugger
    const { transactions } = this.props;
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
