import t from 'tcomb';

const CustomerDetailsData = t.struct({
    firstName: t.String,
    lastName: t.String,
    streetAddress: t.String,
    city: t.String,
    state: t.String,
    phone: t.String,
    email: t.String
}, 'CustomerDetailsData');

export const getDefaultCustomerDetails = () => {
    return CustomerDetailsData({
        firstName: 'Allison',
        lastName: 'Customer',
        streetAddress: '1234 56th Street',
        city: 'Des Moines',
        state: 'IA',
        phone: '(515) 555-5555',
        email: 'allison@customer.com'
    })
};

export default CustomerDetailsData;