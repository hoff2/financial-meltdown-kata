import {getFinancedItemsAPI, postFinancedItemAPI} from "../api/financed-items-api";
import {UPDATE_FINANCED_ITEM, UPDATE_FINANCED_ITEMS} from "./actions";

export const persistFinancedItems = (financedItems) => {
    return dispatch => {
        financedItems.forEach((financedItem, index) => {
            postFinancedItemAPI(financedItem).then((response) => {
                dispatch({
                    type: UPDATE_FINANCED_ITEM,
                    payload: {
                        itemIndex: index,
                        updatedFinancedItem: response
                    }
                })
            });
        });
        return null;
    }
};

export const fetchFinancedItems = () => {
    return dispatch => {
        getFinancedItemsAPI().then((response) => {
            dispatch({
                type: UPDATE_FINANCED_ITEMS,
                payload: response
            });
        });
        return null;
    }
};