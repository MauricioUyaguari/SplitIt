import React from 'react';


const FriendsCreate = ({ user, createFriend}) => {


  const update =  () => {
    createFriend(user);

  };

  return (
    <li className="searched-user">
          <span>{user.email}</span>
        <button onClick={update}>+</button>
    </li>
  );


};


export default FriendsCreate;
