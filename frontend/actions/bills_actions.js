import * as BillApiUtil from '../util/bill_api_util';

export const RECEIVE_ALL_BILLS = 'RECEIVE_ALL_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';


export const receiveAllBills = (bills) => {
  return {
    type: RECEIVE_ALL_BILLS,
    bills
  };
};


export const receiveBill = (bill) => {
  return {
    type: RECEIVE_BILL,
    bill
  };
};

export const fetchAllBills = () => dispatch => {
  return BillApiUtil.fetchAllBills().then(bills => {
    return dispatch(receiveAllBills(bills));
  });

};


export const createBill = (inputBill) => dispatch => {
  return BillApiUtil.createBill(inputBill).then(bill => {
    return dispatch(receiveBill(bill));
  });
};
