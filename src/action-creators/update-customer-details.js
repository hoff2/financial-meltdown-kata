import {UPDATE_CUSTOMER_DETAILS} from "./actions";
import CustomerDetailsData from "../state/customer-details-data";
import {getCustomerDetailsAPI, updateCustomerDetailsAPI} from "../api/customer-details-api";

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
                    type: 'NOOP'
                });
            });
        return null;
    };
};

export const fetchCustomerDetails = () => {
    return dispatch => {
        getCustomerDetailsAPI()
            .then((response) => {
                const customerDetails = CustomerDetailsData(response);
                dispatch({
                    type: UPDATE_CUSTOMER_DETAILS,
                    payload: customerDetails
                });
            });
        return null;
    };
};
