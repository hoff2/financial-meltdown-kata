import {connect} from 'react-redux';
import CreditApplicationContainer from "./credit-application-container";
import {updateCustomerDetails} from "../../action-creators/update-customer-details";
import {updateFinancedItems} from "../../action-creators/update-financed-items";
import {addFinancedItem} from "../../action-creators/add-financed-item";

export const mapStateToProps = state => {
    return {
        customerDetails: state.customerDetails,
        financedItems: state.financedItems
    };
};

export const mapDispatchToProps = {
    addFinancedItem,
    updateCustomerDetails,
    updateFinancedItems
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditApplicationContainer);