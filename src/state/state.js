import t from 'tcomb';
import CustomerDetailsData, {getDefaultCustomerDetails} from "./customer-details-data";
import FinancedItemData, {getDefaultFinancedItem} from "./financed-item-data";

const InitialState = t.struct({
    customerDetails: t.instanceOf(CustomerDetailsData),
    financedItems: t.list(t.instanceOf(FinancedItemData))
}, 'InitialState');

export const getInitialState = () => {
    return InitialState({
        customerDetails: getDefaultCustomerDetails(),
        financedItems: [getDefaultFinancedItem(), getDefaultFinancedItem()]
    })
};

export default InitialState;