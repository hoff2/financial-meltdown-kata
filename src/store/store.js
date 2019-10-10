import { createStore } from "redux";
import combinedReducers from "../reducers/index";

function prepareStore(state = {}) {
    return createStore(combinedReducers, state);
}

export default prepareStore;