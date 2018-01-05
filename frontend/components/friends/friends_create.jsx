import React from 'react';


const FriendsCreate = ({ user, createFriend}) => {


  const update =  () => {
    createFriend(user);

  };

  return (
    <li className="searched-user">
        <img className="connectLogos" src={window.staticImages.dummy_profile_picture}></img>
        <span>{user.email}</span>
        <button onClick={update}>+</button>
    </li>
  );


};


export default FriendsCreate;
