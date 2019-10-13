import React from 'react';
import PropTypes from 'prop-types';
import CustomerDetailsData from "../state/customer-details-data";

const CustomerDetails = (props) => {
    return (
    <div>
        <header>{'Customer Details'}</header>

        <label className='first-name'>
            First Name
            <input
                type="text"
                name="firstName"
                value={props.customerDetails.firstName}
                onChange={
                    (event) => {
                        props.updateCustomerDetails(
                            props.customerDetails,
                            event.target.name,
                            event.target.value)
                    }} />
        </label>

        <label className='last-name'>
            Last Name
            <input
                type="text"
                name="lastName"
                value={props.customerDetails.lastName}
                onChange={
                    (event) => {
                        props.updateCustomerDetails(
                            props.customerDetails,
                            event.target.name,
                            event.target.value)
                    }} />
        </label>

        <label className='street-address'>
            Street Address
            <input
                type="text"
                name="name"
                value={props.customerDetails.streetAddress}
                onChange={() => {}} />
        </label>

        <label className='city'>
            City
            <input
                type="text"
                name="name"
                value={props.customerDetails.city}
                onChange={() => {}} />
        </label>

        <label className='state'>
            State
            <input
                type="text"
                name="name"
                value={props.customerDetails.state}
                onChange={() => {}} />
        </label>

        <label className='phone'>
            Phone
            <input
                type="text"
                name="name"
                value={props.customerDetails.phone}
                onChange={() => {}} />
        </label>

        <label className='email'>
            Email
            <input
                type="text"
                name="name"
                value={props.customerDetails.email}
                onChange={() => {}} />
        </label>
    </div>
)};

CustomerDetails.propTypes = {
    customerDetails: PropTypes.instanceOf(CustomerDetailsData),
    updateCustomerDetails: PropTypes.func
};

export default CustomerDetails;