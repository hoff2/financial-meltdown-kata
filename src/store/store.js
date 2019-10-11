import {applyMiddleware, createStore} from "redux";
import combinedReducers from "../reducers/index";
import {getDefaultCustomerDetails} from "../state/customer-details-data";
import thunk from "redux-thunk";

const initialState = {
    userId: 'tdawg',
    customerDetails: getDefaultCustomerDetails()
};

function prepareStore(state = initialState) {
    return createStore(combinedReducers, state, applyMiddleware(thunk));
}

export default prepareStore;