import {reducers} from "../../../src/reducers";

describe("combineReducers", () => {
    test("should have a reducer for updating last name", () => {
        expect(reducers.hasOwnProperty('customerDetails')).toEqual(true);
    });
});