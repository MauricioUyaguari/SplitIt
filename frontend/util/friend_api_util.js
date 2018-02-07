export const fetchSingleFriend = (id) => {
  return ( $.ajax({
    url: `/api/friends/${id}`,
    method: 'GET'
  })
);
};


export const fetchFriends = () => {
  return ( $.ajax({
    url: '/api/friends',
    method: 'GET'
  })
  );
};


export const createFriendship = (user) => {
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


export const approveFriendship = (id) => {
  return ( $.ajax({
    url: `/api/friends/${id}`,
    method: 'PATCH'
  })
);

};
