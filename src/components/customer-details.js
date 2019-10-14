import React from 'react';
import PropTypes from 'prop-types';
import CustomerDetailsData from "../state/customer-details-data";

const CustomerDetails = (props) => {

    const updateHandler = (event) => {
        props.updateCustomerDetails(
            props.customerDetails,
            event.target.name,
            event.target.value
        )
    };

    return (
    <div>
        <header>{'Customer Details'}</header>

        <label className='first-name'>
            First Name
            <input
                type="text"
                name="firstName"
                value={props.customerDetails.firstName}
                onChange={(event) => updateHandler(event)} />
        </label>

        <label className='last-name'>
            Last Name
            <input
                type="text"
                name="lastName"
                value={props.customerDetails.lastName}
                onChange={(event) => updateHandler(event)} />
        </label>

        <label className='street-address'>
            Street Address
            <input
                type="text"
                name="streetAddress"
                value={props.customerDetails.streetAddress}
                onChange={(event) => updateHandler(event)} />
        </label>

        <label className='city'>
            City
            <input
                type="text"
                name="city"
                value={props.customerDetails.city}
                onChange={(event) => updateHandler(event)} />
        </label>

        <label className='state'>
            State
            <input
                type="text"
                name="state"
                value={props.customerDetails.state}
                onChange={(event) => updateHandler(event)} />
        </label>

        <label className='phone'>
            Phone
            <input
                type="text"
                name="phone"
                value={props.customerDetails.phone}
                onChange={(event) => updateHandler(event)} />
        </label>

        <label className='email'>
            Email
            <input
                type="text"
                name="email"
                value={props.customerDetails.email}
                onChange={(event) => updateHandler(event)} />
        </label>
    </div>
)};

CustomerDetails.propTypes = {
    customerDetails: PropTypes.instanceOf(CustomerDetailsData),
    updateCustomerDetails: PropTypes.func
};

export default CustomerDetails;