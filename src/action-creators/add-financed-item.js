import {ADD_FINANCED_ITEM} from "./actions";

export const addFinancedItem = () => {
    return dispatch => {
        dispatch({
            type: ADD_FINANCED_ITEM
        });
        return null;
    }
};