import { combineReducers } from 'redux'
import customerDetailsReducer from "./customer-details-reducer";

export const reducers = {
    customerDetails: customerDetailsReducer
};

export default combineReducers(reducers);