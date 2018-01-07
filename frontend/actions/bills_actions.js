import * as BillApiUtil from '../util/bill_api_util';

export const RECEIVE_ALL_BILLS = 'RECEIVE_ALL_BILLS';



export const receiveAllBills = (bills) => {
  return {
    type: RECEIVE_ALL_BILLS,
    bills
  };
};



export const fetchAllBills = () => dispatch => {
  return BillApiUtil.fetchAllBills().then(bills => {
    return dispatch(receiveAllBills(bills));
  });

};
