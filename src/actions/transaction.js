import * as types from '../constants/ActionTypes';
import { createAction } from 'redux-actions';
import * as transactionService from '../services/transaction';
import * as storageService from '../services/storage';


export const send = createAction(types.SEND, transactionService.send, ({resolved, rejected})=> {
    return {
        resolved,
        rejected,
        sync: 'transaction'
    }
});


export const getTxInfo = createAction(types.GET_TX_INFO, transactionService.getTxInfo);


export const syncTxInfo = createAction(types.SYNC_TX_INFO, transactionService.getTxInfo, ()=> {
    return {
        sync: 'transaction'
    }
});


export const getTransactionFromStorage = createAction(types.GET_TRANSACTION_FROM_STORAGE, ()=> {
    return storageService.getItem('transaction')
        .then(data=> {
            if (data && typeof data === 'object') {
                return data;
            }
            throw 'get transaction from storage error';
        });
});
