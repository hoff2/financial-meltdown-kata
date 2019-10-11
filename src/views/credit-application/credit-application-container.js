import React from 'react';
import CustomerDetails from "../../components/customer-details";

const CreditApplicationContainer = (props) => (
    <div>
        <header>Credit Application</header>
        <CustomerDetails {...props} />
    </div>
);

CreditApplicationContainer.propTypes = {};

export default CreditApplicationContainer;