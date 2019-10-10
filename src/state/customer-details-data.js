import t from 'tcomb';

const CustomerDetailsData = t.struct({
    lastName: t.String
}, 'CustomerDetailsData');

export const getDefaultCustomerDetails = () => {
    return CustomerDetailsData({
        lastName: 'tdawg'
    })
};

export default CustomerDetailsData;