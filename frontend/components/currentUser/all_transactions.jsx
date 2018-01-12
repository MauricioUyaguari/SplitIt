import React from 'react';
import { Link } from 'react-router-dom';
import { transactionsSort, monthDayYearDateFormat } from '../../util/functions';


class AllTransactionsView extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchDashboard();
  }




  renderSingleTansaction(transaction){
    const {friends, currentUser} = this.props;
    const payer1 = (transaction.payer_id === currentUser.id) ? currentUser.email : friends[transaction.payer_id].email;
    const loaner1 =   (payer1 === currentUser.email) ? friends[transaction.loaner_id].email : currentUser.email;
    const date = new Date (transaction.created_at);
    const dateString = monthDayYearDateFormat(date);
    const rightMessage = (transaction.payer_id === currentUser.id) ? "you paid" : "you received"
    return (
    <div className="dashboard-trans-item" key={transaction.id}>
       <div className="dashboard-trans-item-left">
         <div>
           <img className="trans-money-icon" src={window.staticImages.icon_money}></img>
         </div>
         <div>
           <div>{payer1} paid {loaner1} ${transaction.amount_payed}</div>
             <div> on {dateString}</div>
         </div>
      </div>
      <div className="dashboard-trans-item-right">
        <div className="dashboard-trans-item-right-mes">{rightMessage}</div>
        <div className={(rightMessage === "you paid") ? "pos-money2" : "neg-money2"}> ${parseFloat(transaction.amount_payed)}
        </div>
      </div>
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
            <div className="dashboard-index-trans-outermost-div">
              {this.renderAllTransactions(sortedTransactions)}
            </div>
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
