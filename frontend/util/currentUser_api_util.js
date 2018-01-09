export const fetchDashboard = () => {

  return($.ajax({
      url: 'api/users/dashboard',
      method: 'GET'
  })
);

};
