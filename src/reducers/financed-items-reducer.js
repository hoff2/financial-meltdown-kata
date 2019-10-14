import {getDefaultFinancedItem} from "../state/financed-item-data";
import {ADD_FINANCED_ITEM, UPDATE_FINANCED_ITEMS} from "../action-creators/actions";
import FinancedItemData from "../state/financed-item-data";

const addFinancedItem = (state) => {
    const updatedFinancedItems = state.slice();

    const newFinancedItem = FinancedItemData({
        itemName: "",
        price: 0.00
    });

    updatedFinancedItems.push(newFinancedItem);

    return updatedFinancedItems;
};

const updateFinancedItems = (state, action) => {
    const updatedFinancedItems = state.slice();
    const itemIndex = action.payload.itemIndex;
    const updatedItem = action.payload.updatedFinancedItem;

    updatedFinancedItems[itemIndex] = updatedItem;

    return updatedFinancedItems;
};

const financedItemsReducer = (state = [getDefaultFinancedItem(), getDefaultFinancedItem()], action) => {
    const reducers = {
        [ADD_FINANCED_ITEM]: addFinancedItem,
        [UPDATE_FINANCED_ITEMS]: updateFinancedItems
    };

    const reducer = action ? reducers[action.type] : null;

    return reducer ? reducer(state, action) : state;
};

export default financedItemsReducer;