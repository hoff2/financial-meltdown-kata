import t from 'tcomb';
import CustomerDetailsData from "./customer-details-data";

const InitialState = t.struct({
    userId: t.String,
    customerDetails: t.instanceOf(CustomerDetailsData)
}, 'InitialState');

export const getInitialState = () => {
    return InitialState({
        userId: 'tdawg',
        customerDetails: CustomerDetailsData({
            lastName: 'tdawg'
        })
    })
};

export default InitialState;