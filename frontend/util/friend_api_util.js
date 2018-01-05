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




export const searchUsers = (query) => {
  return($.ajax({
    url: '/api/users/search',
    method: 'GET',
    data: {query}
  })
);
};
