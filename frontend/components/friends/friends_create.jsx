import React from 'react';


const FriendsCreate = ({ user, createFriend}) => {


  const update =  () => {
    createFriend(user);

  };

  return (
    <li>
          {user.email}
        <button onClick={update}>Add Friend</button>
    </li>
  );


};


export default FriendsCreate;
