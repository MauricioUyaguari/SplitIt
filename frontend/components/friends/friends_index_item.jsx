import React from 'react';
import { Link } from 'react-router-dom';


const FriendsIndexItem = ( { friend }) => {

return (

        <Link to={`/friends/${friend.id}`}>
          <img src={window.staticImages.icon_person}></img>
          <span>
            {friend.email}
          </span>
        </Link>

);

};

export default FriendsIndexItem ;
