import t from 'tcomb';
import CustomerDetailsData from "./customer-details-data";

const InitialState = t.struct({
    customerDetails: t.instanceOf(CustomerDetailsData)
}, 'InitialState');

export const getInitialState = () => {
    return InitialState({
        customerDetails: CustomerDetailsData({
            lastName: 'tdawg'
        })
    })
};

export default InitialState;