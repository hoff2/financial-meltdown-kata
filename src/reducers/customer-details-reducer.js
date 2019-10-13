import {getDefaultCustomerDetails} from "../state/customer-details-data";
import {UPDATE_CUSTOMER_DETAILS} from "../action-creators/actions";

const updateCustomerDetails = (state, action) => {
    return action.payload;
};

const customerDetailsReducer = (state = getDefaultCustomerDetails(), action) => {
    const reducers = {
        [UPDATE_CUSTOMER_DETAILS]: updateCustomerDetails
    };

    const reducer = reducers[action.type];

    return reducer ? reducer(state, action): state;
};

export default customerDetailsReducer;