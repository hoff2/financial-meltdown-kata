import {UPDATE_CUSTOMER_DETAILS} from "./actions";
import CustomerDetailsData from "../state/customer-details-data";
import {updateCustomerDetailsAPI} from "../api/customer-details-api";

export const updateCustomerDetails = (customerDetails, name, value) => {
    const updatedCustomerDetails = CustomerDetailsData.update(customerDetails, {
        [name]: {
            $set: value
        }
    });

    return dispatch => {
        dispatch({
            type: UPDATE_CUSTOMER_DETAILS,
            payload: updatedCustomerDetails
        });
        return null;
    }
};

export const persistCustomerDetails = (customerDetails) => {
    return dispatch => {
    updateCustomerDetailsAPI(customerDetails)
        .then(() => {
            dispatch({
                type: 'SOMETHING'
            })
        });

    };
};
