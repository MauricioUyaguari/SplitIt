import React from 'react';
import BillCommentsShowContainer from '../comments/bill_comments_show_container';


class FriendsBillShow extends React.Component {

  constructor(props){
    super(props);
    this.splitsRender = this.splitsRender.bind(this);
    this.renderDate = this.renderDate.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.state = {detail: false, splitsForBill: this.billSplits()};
  }



  billSplits(){
    const { friendsSplits, bill, friend} = this.props;
    const result = [];
    friendsSplits.forEach((split) => {
      if(split.bill_id == bill.id) {
        result.push(split);
      }
    });
    return result;
  }

  splitsRender () {
    const { friendsSplits, bill, friend} = this.props;
    return (
    this.billSplits().map(split =>
      <div key={split.id}>
        <span>{(split.debtor_id == friend.id) ? friend.email : "You"}:</span>
        <span className="split-amount"> ${split.amount_due}</span>
      </div>
    )
  );
  }


  splitMessage () {
    
    const { friendsSplits, bill, friend} = this.props;
    const currentUserSplit = this.billSplits().filter(el => el.debtor_id !== friend.id);
    const friendSplit =  this.billSplits().filter(el => el.debtor_id === friend.id);
    if(bill.payer_id == friend.id){
      return (<li className="bill-red">
        {friend.email} lent you
        <span>
          ${currentUserSplit[0].amount_due}
        </span>
      </li>);
    } else {
      return(<li className="bill-green">
        You lent {friend.email}
        <span> ${friendSplit[0].amount_due}</span>
      </li>);
    }
  }


  renderDate  ()  {
    const { friendsSplits, bill, friend} = this.props;
    let newDate = new Date(bill.date);
    newDate.setDate(newDate.getDate()+1);
    let monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    let month = monthNames[newDate.getMonth()];
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    return (<div className="bill-date">
      <span>{month}</span>
      <span>{day}</span>
      <span>{year}</span>
    </div>);
  }


  toggleDetail(e){
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  detailedView(){
    const { bill, friend, currentUser} = this.props;
    const {splitsForBill} = this.state;
    let newDate = new Date(bill.date);
    newDate.setDate(newDate.getDate()+1);
    let payer = (bill.payer_id === currentUser.id) ? currentUser : friend;
    let debtor = (bill.payer_id === currentUser.id) ? friend : currentUser ;
    let splitPayer = (splitsForBill[0].debtor_id === payer.id) ? splitsForBill[0] : splitsForBill[1];
    let splitDebtor = (splitsForBill[0].debtor_id === payer.id) ? splitsForBill[1] : splitsForBill[0];
    return(
      <div className="bill-detail-div">
        <div><img className="bill-comment-image bill-image" src={window.staticImages.icon_bill}></img></div>
        <div className="bill-detail-div-left-side">
          <div className="bill-detail-div-descr">{bill.description}</div>
          <div className="bill-detail-div-amt">${bill.total_amt}</div>
          <div className="bill-detail-div-date">Added on </div>
          <div className="bill-detail-div-date"> {newDate.toDateString()}</div>
        </div>
      <div>
          <div className="bill-detail-div-payer-info-div">
            <div><img className="bill-image" src={window.staticImages.person_icon}></img></div>
            <div className="bill-detail-div-trans-info">
              <div> <span className="span-person">{payer.email} </span> paid $<span className="money">{bill.total_amt}</span></div>
              <div>and owes <span className="money">${splitPayer.amount_due}</span></div>
            </div>
          </div>
          <div className="bill-detail-div-loaner-info-div">
            <div><img className="bill-image" src={window.staticImages.person_icon}></img></div>
            <div> <span className="span-person">{debtor.email}</span> owes <span className="money">${splitDebtor.amount_due}</span></div>
          </div>
        </div>
      </div>
  );
  }

  render () {
    const { friendsSplits, bill, friend} = this.props;
    let billDetail;
    if(this.state.detail){
      billDetail = this.detailedView();
    }
    let commentsDetail;
    if(this.state.detail){
      commentsDetail = <BillCommentsShowContainer friend={friend} bill={bill}/>;
    }


  return(
    <section>
      <div onClick={this.toggleDetail} className="friend-bill-show-item">
        <ul className="friend-bill-show-left-bar">
          <li > {this.renderDate()}</li>
          <img className="bill-image" src={window.staticImages.icon_bill}></img>
          <li className="bill-description">{bill.description}</li>
        </ul>
        <ul className="friend-bill-show-middle-bar">
          <li className="payer">{(bill.payer_id == friend.id) ? friend.email : "You"} paid
            <span>${bill.total_amt}</span>
          </li>
            {this.splitMessage()}
        </ul>
        <div className="friend-bill-show-right-bar">
        <span>Splits</span>
          {this.splitsRender()}
        </div>
      </div>
      <div className="bill-detail-and-comment-div">
        {billDetail}
        {commentsDetail}
      </div>
    </section>
  );
  }


}


export default FriendsBillShow;
