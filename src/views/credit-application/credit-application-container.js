import React from 'react';
import CustomerDetails from "../../components/customer-details";
import FinancedItems from "../../components/financed-items";
import PropTypes from 'prop-types';

class CreditApplicationContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCustomerDetails();
        this.props.fetchFinancedItems();
    };

    render() {
        return (
            <div>
                <header>Credit Application</header>
                <CustomerDetails {...this.props} />
                <FinancedItems {...this.props} />
            </div>)
    }
}

CreditApplicationContainer.propTypes = {
    fetchCustomerDetails: PropTypes.func,
    fetchFinancedItems: PropTypes.func
};

export default CreditApplicationContainer;