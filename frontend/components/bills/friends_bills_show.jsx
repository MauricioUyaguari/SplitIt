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
      <li key={split.id}>
        {(split.debtor_id == friend.id) ? friend.email : "You"}:
        {split.amount_due}
      </li>
    )
  );
  };


  const splitMessage = () => {
    const currentUserSplit = billSplits.filter(el => el.debtor_id !== friend.id)
    const friendSplit =  billSplits.filter(el => el.debtor_id === friend.id)
    if(bill.payer_id == friend.id){
      return (<div>
        You Owe {friend.email} {currentUserSplit[0].amount_due}
      </div>);
    } else {
      return(<div>
        You Lent {friend.email} {friendSplit[0].amount_due}
      </div>);
    }
  };

  return(

    <ul> {bill.description}
      <li> Date: {bill.date}</li>
      <li>{(bill.payer_id == friend.id) ? friend.email : "You"} paid {bill.total_amt}</li>
      <ul>
        {splitMessage()}
        Splits
        {splitsRender()}
      </ul>
      <br />
    </ul>
  );


};


export default FriendsBillShow;
