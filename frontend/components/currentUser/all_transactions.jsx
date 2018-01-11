import React from 'react';
import { Link } from 'react-router-dom';
import { transactionsSort } from '../../util/functions';


class AllTransactionsView extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchDashboard();
  }




  renderSingleTansaction(transaction){
    const {friends, currentUser} = this.props;
    const payer = (transaction.payer_id === currentUser.id) ? "You" : friends[transaction.payer_id].email;
    const loaner =   (payer === "You") ? friends[transaction.loaner_id].email : "You";
    const date = new Date (transaction.created_at);
    const dateString = date.toLocaleString();
    debugger
    return (<div key={transaction.id}>
      <div> {payer} paid {loaner} ${transaction.amount_payed} on {dateString} </div>
      <br />
    </div>);

  }


  renderAllTransactions(transactions){

    return(transactions.map(transaction =>
      this.renderSingleTansaction(transaction)
    )
    );


  }

  render(){

      if(this.props.currentUser.all_transactions === undefined){
        return null;
      }
    const sortedTransactions = transactionsSort(this.props.currentUser.all_transactions);

      return(<div className="friends-show">
      <div className="new-div">
          <div className="dashboard-top-nav topbar-friend ">
              <div className="dashboard-top-nav-upper">
                <div className="dashboard-label">
                  All Transactions
                </div>
              </div>
          </div>
          <div className="dashboard-main-section">
            <ul>
              {this.renderAllTransactions(sortedTransactions)}
            </ul>
          </div>
        </div>
        <div className="right-nav-friends-summary">
          <p>Welcome to Split It the best app ever</p>
        </div>
      </div>


      );
  }


}

export default AllTransactionsView;
