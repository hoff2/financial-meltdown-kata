import {connect} from 'react-redux';
import CreditApplicationContainer from "./credit-application-container";
import {
    fetchCustomerDetails,
    persistCustomerDetails,
    updateCustomerDetails
} from "../../action-creators/update-customer-details";
import {updateFinancedItems} from "../../action-creators/update-financed-items";
import {addFinancedItem, fetchFinancedItems, persistFinancedItems} from "../../action-creators/financed-items";

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