import React from 'react';
import PropTypes from 'prop-types';
import CustomerDetailsData from "../state/customer-details-data";

const CustomerDetails = (props) => {
    return (
    <div>
        <header>{'Customer Details'}</header>

        <label className='last-name'>
            Last Name:
            <input
                type="text"
                name="name"
                value={props.customerDetails.lastName}
                onChange={(event) => props.updateLastName(event.target.value)} />
        </label>
    </div>
)};

CustomerDetails.propTypes = {
    customerDetails: PropTypes.instanceOf(CustomerDetailsData),
    updateLastName: PropTypes.func
};

export default CustomerDetails;