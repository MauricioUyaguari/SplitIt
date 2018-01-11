import * as TransactionApiUtil from '../util/transaction_api_util';



export const RECEIVE_NEW_TRANSACTION = 'RECEIVE_NEW_TRANSACTION';



export const receiveNewTransaction = (transactionData) => {

  return{
    type: RECEIVE_NEW_TRANSACTION,
    transaction: transactionData.transaction,
    friend: transactionData.friend[0]
  };
};



export const createTransaction = (inputTransaction) => dispatch => {
  return TransactionApiUtil.createTransaction(inputTransaction).then(transaction => {
    return dispatch(receiveNewTransaction(transaction));
  });
};
