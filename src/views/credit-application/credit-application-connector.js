import {connect} from 'react-redux';
import CreditApplicationContainer from "./credit-application-container";
import {
    fetchCustomerDetails,
    persistCustomerDetails,
    updateCustomerDetails
} from "../../components/customer-details/customer-details-action-creators";
import {
    addFinancedItem,
    fetchFinancedItems,
    persistFinancedItems,
    updateFinancedItems
} from "../../action-creators/financed-items";

export const mapStateToProps = state => {
    return {
        customerDetails: state.customerDetails,
        financedItems: state.financedItems
    };
};

export const mapDispatchToProps = {
    addFinancedItem,
    fetchCustomerDetails,
    fetchFinancedItems,
    persistCustomerDetails,
    persistFinancedItems,
    updateCustomerDetails,
    updateFinancedItems
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditApplicationContainer);