import React from 'react';



const FriendsBillBalance = ({friend}) => {

  const positiveBalance = () => {
    const balance = Math.abs(friend.balance_with_current_user);
    return(
      <div>
        <span> {friend.email} owes you {balance} </span>
      </div>
    );
  };

  const negativeBalance = () => {
    const balance = Math.abs(friend.balance_with_current_user);
    return(
      <div>
        <span> You owe {friend.email} {balance} </span>
      </div>
    );
  };

  return (
    <div> Your Balance
      {(friend.balance_with_current_user > 0) ? positiveBalance() : negativeBalance()}
    </div>

  );


};



export default FriendsBillBalance;
