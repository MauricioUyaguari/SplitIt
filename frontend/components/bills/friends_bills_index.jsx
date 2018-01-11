import React from 'react';
import FriendsBillShow from './friends_bills_show';
import { billsSort } from '../../util/functions';


const FriendsBillsIndex = ({ bills, splits, friend, currentUser}) => {


  const renderBills = () => {
    const friendsBills = [];
      bills.forEach((el) => {
        if(friend.bills_id.includes(el.id)){
          friendsBills.push(el);
        }
      }
    );
    const friendsSplits = [];
      splits.forEach((split) => {
        if(friend.splits_id.includes(split.id)){
          friendsSplits.push(split);
        }
      });

  const test = billsSort(friendsBills);

    const sortedBills = friendsBills.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
      }
    );
    return (
    test.map(bill =>
          <FriendsBillShow
            key={bill.id}
            bill={bill}
            friendsSplits={friendsSplits}
            friend={friend}
            currentUser={currentUser}
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
