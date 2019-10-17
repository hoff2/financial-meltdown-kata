import {UPDATE_FINANCED_ITEM} from "./actions";
import FinancedItemData from "../state/financed-item-data";

export const updateFinancedItems = (itemIndex, financedItem, name, value) => {
    const updatedFinancedItem = FinancedItemData.update(financedItem, {
        [name]: {
            $set: value
        }
    });

    return dispatch => {
        dispatch({
            type: UPDATE_FINANCED_ITEM,
            payload: {
                itemIndex: itemIndex,
                updatedFinancedItem: updatedFinancedItem
            }
        });
        return null;
    }
};