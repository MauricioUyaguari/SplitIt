import React from 'react';



const FriendsBillBalance = ({friend}) => {

  const positiveBalance = () => {
    const balance = Math.abs(friend.balance_with_current_user);
    return(
      <div className="summary-positiveBalance">
        <div> {friend.email} owes you <span className="money-span">${balance}</span> </div>
      </div>
    );
  };

  const negativeBalance = () => {
    const balance = Math.abs(friend.balance_with_current_user);
    return(
      <div className="summary-negativeBalance">
        <div> You owe {friend.email} <span className="money-span">${balance}</span> </div>
      </div>
    );
  };

  if(friend.balance_with_current_user === undefined){
    return null;
  }

  return (
    <div className="friend-bill-summary"> <span className="span-your-balance">Your Balance</span>
      {(friend.balance_with_current_user > 0) ? positiveBalance() : negativeBalance()}
    </div>

  );


};



export default FriendsBillBalance;
