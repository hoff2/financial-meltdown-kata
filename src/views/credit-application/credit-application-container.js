import React from 'react';
import CustomerDetails from "../../components/customer-details";
import FinancedItems from "../../components/financed-items";

const CreditApplicationContainer = (props) => (
    <div>
        <header>Credit Application</header>
        <CustomerDetails {...props} />
        <FinancedItems {...props} />
    </div>
);

CreditApplicationContainer.propTypes = {};

export default CreditApplicationContainer;