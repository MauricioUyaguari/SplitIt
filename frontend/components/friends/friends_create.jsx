import React from 'react';


const FriendsCreate = ({ user, createFriendship, closeModal}) => {


  const update =  () => {
    createFriendship(user);
    closeModal();
  };

  return (
    <li className="searched-user">
        <img className="connectLogos" src={window.staticImages.dummy_profile_picture}></img>
        <span>{user.email}</span>
        <button className="modal-addFriendButton" onClick={update}>+</button>
    </li>
  );


};


export default FriendsCreate;
