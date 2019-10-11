import {connect} from 'react-redux';
import CreditApplicationContainer from "./credit-application-container";
import {updateLastName} from "../../action-creators/update-customer-details";

export const mapStateToProps = state => (
    {
        userId: state.userId,
        customerDetails: state.customerDetails
    });

export const mapDispatchToProps = {
    updateLastName
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditApplicationContainer);