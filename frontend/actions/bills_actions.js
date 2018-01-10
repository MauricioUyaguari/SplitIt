import * as BillApiUtil from '../util/bill_api_util';

export const RECEIVE_ALL_BILLS = 'RECEIVE_ALL_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const RECEIVE_NEW_BILL = 'RECEIVE_NEW_BILL';

export const receiveAllBills = (bills) => {
  return {
    type: RECEIVE_ALL_BILLS,
    bills
  };
};


export const receiveBill = (billData) => {

  return {
    type: RECEIVE_BILL,
    bill: billData.bill,
    splits: billData.splits,
    comments: billData.comments,
    friend: billData.friend
  };
};

export const receiveNewBill = (billData) => {
  return {
    type: RECEIVE_NEW_BILL,
    bill: billData.bill,
    friend: billData.friend[0],
    splits_id: billData.bill.splits_id,
    splits: billData.splits,
    friendSplit: billData.splits.filter(split => split.debtor_id == billData.friend[0].id)[0],
    comments: billData.comments
  };
};


export const fetchAllBills = () => dispatch => {
  return BillApiUtil.fetchAllBills().then(bills => {
    return dispatch(receiveAllBills(bills));
  });

};


export const createBill = (inputBill) => dispatch => {
  return BillApiUtil.createBill(inputBill).then(bill => {
    return dispatch(receiveNewBill(bill));
  });
};

export const fetchBill = (id) => dispatch => {
  return BillApiUtil.fetchBill(id).then(bill => {
    return dispatch(receiveBill(bill));
  });
};
