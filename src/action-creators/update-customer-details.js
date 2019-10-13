import {UPDATE_CUSTOMER_DETAILS} from "./actions";
import CustomerDetailsData from "../state/customer-details-data";

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