import CustomerDetailsData, {getDefaultCustomerDetails} from "../state/customer-details-data";
import {UPDATE_LAST_NAME} from "../action-creators/actions";

const updateLastName = (state, action) => {
    return CustomerDetailsData.update(state, {
        lastName: {
            $set: action.payload
        }
    })
};

const customerDetailsReducer = (state = getDefaultCustomerDetails(), action) => {
    const reducers = {
        [UPDATE_LAST_NAME]: updateLastName
    };

    const reducer = reducers[action.type];

    return reducer ? reducer(state, action): state;
};

export default customerDetailsReducer;