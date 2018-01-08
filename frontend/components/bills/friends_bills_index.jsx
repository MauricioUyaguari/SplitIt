import React from 'react';
import FriendsBillShow from './friends_bills_show';

const FriendsBillsIndex = ({ bills, splits, friend}) => {
  const renderBills = () => {
    const friendsBills = [];
    bills.forEach((el) => {
      if(friend.bills_id.includes(el.id)){
        friendsBills.push(el);
      }
    });
  const friendsSplits = [];
  splits.forEach((split) => {
    if(friend.splits_id.includes(split.id)){
      friendsSplits.push(split);
    }
  });
    return (
    friendsBills.map(bill =>
      <li key={bill.id}>
          <FriendsBillShow
            bill={bill}
            friendsSplits={friendsSplits}
            friend={friend}
            />
    </li>)
  );
  };

  if(friend.bills_id === undefined){
    return (<div></div>);
  }
  return (<div>
    Bills shared with {friend.email}
    <ul>
      {renderBills()}
    </ul>
  </div>);


};


export default FriendsBillsIndex;
