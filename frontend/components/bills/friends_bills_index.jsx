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

  const sortedBills = friendsBills.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  }
  );

    return (
    sortedBills.map(bill =>
          <FriendsBillShow
            bill={bill}
            friendsSplits={friendsSplits}
            friend={friend}
            />
    )
  );
  };

  if(friend.bills_id === undefined){
    return (<div></div>);
  }
  return (<div className="bills">
      {renderBills()}
  </div>);


};


export default FriendsBillsIndex;
