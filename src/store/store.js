import { createStore } from "redux";
import combinedReducers from "../reducers/index";

const initialState = {
    userId: 'tdawg'
};

function prepareStore(state = initialState) {
    return createStore(combinedReducers, state);
}

export default prepareStore;