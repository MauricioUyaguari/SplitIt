export const fetchFriends = () => {
  return ( $.ajax({
    url: '/api/friends',
    method: 'GET'
  })
  );
};


export const createFriend = (user) => {
  return ( $.ajax({
    url: '/api/friends',
    method: 'POST',
    data: {user}
  })
  );
};




export const fetchAllUsers = () => {
  return( $.ajax({


  })
  );
};








export const fetchFriend = () => {

};
