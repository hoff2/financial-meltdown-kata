import {getDefaultFinancedItem} from "../state/financed-item-data";

const financedItemsReducer = (state = [getDefaultFinancedItem()]) => {
    return state;
};

export default financedItemsReducer;