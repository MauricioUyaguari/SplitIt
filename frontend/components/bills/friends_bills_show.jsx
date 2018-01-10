import React from 'react';
import BillCommentsShowContainer from '../comments/bill_comments_show_container';


class FriendsBillShow extends React.Component {

  constructor(props){
    super(props);
    this.splitsRender = this.splitsRender.bind(this);
    this.renderDate = this.renderDate.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.state = {detail: false};
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
    const { friendsSplits, bill, friend, currentUser} = this.props;
    let newDate = new Date(bill.date);
    newDate.setDate(newDate.getDate()+1);
    let payer = (bill.payer_id === currentUser.id) ? currentUser : friend;
    let debtor = (bill.payer_id === currentUser.id) ? friend : currentUser ;
    let splitPayer = (friendsSplits[0].debtor_id === payer.id) ? friendsSplits[0] : friendsSplits[1];
    let splitDebtor = (friendsSplits[0].debtor_id === payer.id) ? friendsSplits[1] : friendsSplits[0];
    return(
      <div className="bill-detail-div">
        <div >
        <div>{bill.description}</div>
          <img className="bill-image" src={window.staticImages.icon_bill}></img>
          <div>Added on {newDate.toDateString()}</div>
        </div>
        <div>
          <div>
            <img className="bill-image" src={window.staticImages.person_icon}></img>
            {payer.email} paid ${bill.total_amt}
            {payer.email} owes ${splitPayer.amount_due}
          </div>
          <div>
            <img className="bill-image" src={window.staticImages.person_icon}></img>
            {debtor.email} owes ${splitDebtor.amount_due}
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
