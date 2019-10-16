import React from 'react';
import PropTypes from 'prop-types';
import CustomerDetailsData from "../state/customer-details-data";
import '../styles/customer-details.css';

const CustomerDetails = (props) => {

    const persistHandler = () => {
        props.persistCustomerDetails(props.customerDetails);
    };

    const updateHandler = (event) => {
        props.updateCustomerDetails(
            props.customerDetails,
            event.target.name,
            event.target.value
        )
    };

    return (
        <div className='customer-details'>
            <header>{'Customer Details'}</header>

            <div className='row'>
                <div className='first-name column'>
                    {'First Name'}
                    <input
                        type="text"
                        name="firstName"
                        value={props.customerDetails.firstName}
                        onChange={(event) => updateHandler(event)} />
                </div>

                <div className='last-name column'>
                    {'Last Name'}
                    <input
                        type="text"
                        name="lastName"
                        value={props.customerDetails.lastName}
                        onChange={(event) => updateHandler(event)} />
                </div>
            </div>

            <div className='row'>
                <div className='street-address column'>
                    Street Address
                    <input
                        type="text"
                        name="streetAddress"
                        value={props.customerDetails.streetAddress}
                        onChange={(event) => updateHandler(event)} />
                </div>

                <div className='city column'>
                    City
                    <input
                        type="text"
                        name="city"
                        value={props.customerDetails.city}
                        onChange={(event) => updateHandler(event)} />
                </div>

                <div className='state column'>
                    State
                    <input
                        type="text"
                        name="state"
                        value={props.customerDetails.state}
                        onChange={(event) => updateHandler(event)} />
                </div>
            </div>

            <div className='row'>
                <div className='phone column'>
                    Phone
                    <input
                        type="text"
                        name="phone"
                        value={props.customerDetails.phone}
                        onChange={(event) => updateHandler(event)} />
                </div>

                <div className='email column'>
                    Email
                    <input
                        type="text"
                        name="email"
                        value={props.customerDetails.email}
                        onChange={(event) => updateHandler(event)} />
                </div>
            </div>
            <div className='row'>
                <div className='update-customer-details'>
                    <button onClick={() => persistHandler()}>{'Update'}</button>
                </div>
            </div>
        </div>
)};

CustomerDetails.propTypes = {
    customerDetails: PropTypes.instanceOf(CustomerDetailsData),
    persistCustomerDetails: PropTypes.func,
    updateCustomerDetails: PropTypes.func
};

export default CustomerDetails;