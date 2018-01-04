import React from 'react';
import { Link } from 'react-router-dom';


const FriendsIndexItem = ( { friend }) => {

return (
      <li  key={friend.id}>
        <Link to={`/friends/${friend.id}`}>
        {friend.email}
        </Link>
      </li>
);

};

export default FriendsIndexItem ;
