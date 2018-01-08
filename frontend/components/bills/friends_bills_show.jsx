import React from 'react'


const FriendsBillShow = ({ bill, friendsSplits, friend}) => {

  const billSplits = [];

  friendsSplits.forEach((split) => {
    if(split.bill_id == bill.id) {
      billSplits.push(split);
    }
  });
  const splitsRender = () => {
    return (
    billSplits.map(split =>
      <div key={split.id}>
        <span>{(split.debtor_id == friend.id) ? friend.email : "You"}:</span>
        <span className="split-amount"> ${split.amount_due}</span>
      </div>
    )
  );
  };


  const splitMessage = () => {
    const currentUserSplit = billSplits.filter(el => el.debtor_id !== friend.id)
    const friendSplit =  billSplits.filter(el => el.debtor_id === friend.id)
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
  };


  const renderDate = () => {

    let newDate = new Date(bill.date);
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
  };


  return(
  <div className="friend-bill-show-item">
    <ul className="friend-bill-show-left-bar">
      <li > {renderDate()}</li>
      <img className="bill-image" src={window.staticImages.icon_bill}></img>
      <li className="bill-description">{bill.description}</li>
    </ul>
    <ul className="friend-bill-show-middle-bar">
      <li className="payer">{(bill.payer_id == friend.id) ? friend.email : "You"} paid
        <span>${bill.total_amt}</span>
      </li>
      {splitMessage()}
    </ul>
    <div className="friend-bill-show-right-bar">
    <span>Splits</span>
    {splitsRender()}
    </div>
  </div>
  );


};


export default FriendsBillShow;
