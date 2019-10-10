import { createStore } from "redux";
import combinedReducers from "../reducers/index";
import {getDefaultCustomerDetails} from "../state/customer-details-data";

const initialState = {
    userId: 'tdawg',
    customerDetails: getDefaultCustomerDetails()
};

function prepareStore(state = initialState) {
    return createStore(combinedReducers, state);
}

export default prepareStore;