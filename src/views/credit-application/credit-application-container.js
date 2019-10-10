import React from 'react';
import PropTypes from 'prop-types';
import CustomerDetails from "../../components/customer-details";

const CreditApplicationContainer = (props) => (
    <div>
        <header>Credit Application</header>
        <div className='userId'>{'User: '} {props.userId}</div>
        <CustomerDetails {...props} />
    </div>
);

CreditApplicationContainer.propTypes = {
    userId: PropTypes.string
};

export default CreditApplicationContainer;