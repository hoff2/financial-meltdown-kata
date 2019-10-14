import {getDefaultFinancedItem} from "../state/financed-item-data";
import {UPDATE_FINANCED_ITEMS} from "../action-creators/actions";

const updateFinancedItems = (state, action) => {
    const updatedFinancedItems = state.slice();
    const itemIndex = action.payload.itemIndex;
    const updatedItem = action.payload.updatedFinancedItem;

    updatedFinancedItems[itemIndex] = updatedItem;

    return updatedFinancedItems;
};

const financedItemsReducer = (state = [getDefaultFinancedItem(), getDefaultFinancedItem()], action) => {
    const reducers = {
        [UPDATE_FINANCED_ITEMS]: updateFinancedItems
    };

    const reducer = action ? reducers[action.type] : null;

    return reducer ? reducer(state, action) : state;
};

export default financedItemsReducer;