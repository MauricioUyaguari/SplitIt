export const fetchAllBills = () => {
  return ($.ajax({
    url: '/api/bills',
    method: 'GET'
  })
);
};





export const createBill = (bill) => {
  return($.ajax({
    url: '/api/bills',
    method: 'POST',
    data: {bill}
  })
);
};



export const fetchBill = id => (
  $.ajax({
    method: 'GET',
    url: `api/bills/${id}`
  })
);
