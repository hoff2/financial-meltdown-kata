import { combineReducers } from 'redux'
import customerDetailsReducer from "./customer-details-reducer";
import financedItemsReducer from "./financed-items-reducer";

export const reducers = {
    customerDetails: customerDetailsReducer,
    financedItems: financedItemsReducer
};

export default combineReducers(reducers);