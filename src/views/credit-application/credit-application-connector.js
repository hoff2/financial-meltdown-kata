import {connect} from 'react-redux';
import CreditApplicationContainer from "./credit-application-container";

export const mapStateToProps = state => (
    {
        userId: state.userId
    });

const mapDispatchToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreditApplicationContainer);