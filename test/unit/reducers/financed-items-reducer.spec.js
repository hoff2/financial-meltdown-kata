import React from 'react';
import financedItemsReducer from "../../../src/reducers/financed-items-reducer";
import {getDefaultFinancedItem} from "../../../src/state/financed-item-data";

describe("FinancedItemsReducer", () => {
        test("should return initial state by default", () => {
            const reducerResult = financedItemsReducer();

            expect(reducerResult.length).toEqual(2);
        });
});