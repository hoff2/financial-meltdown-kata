import {connect} from 'react-redux';
import CreditApplicationContainer from "./credit-application-container";
import {updateCustomerDetails} from "../../action-creators/update-customer-details";

export const mapStateToProps = state => {
    return {
        customerDetails: state.customerDetails,
        financedItems: state.financedItems
    };
};

export const mapDispatchToProps = {
    updateCustomerDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditApplicationContainer);