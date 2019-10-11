import {applyMiddleware, createStore} from "redux";
import combinedReducers from "../reducers/index";
import thunk from "redux-thunk";

function prepareStore(state) {
    return createStore(combinedReducers, state, applyMiddleware(thunk));
}

export default prepareStore;