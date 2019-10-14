import React from 'react';
import financedItemsReducer from "../../../src/reducers/financed-items-reducer";
import {UPDATE_FINANCED_ITEMS} from "../../../src/action-creators/actions";
import Chance from 'chance';
import FinancedItemData from "../../../src/state/financed-item-data";

const chance = new Chance();

const financedItem = FinancedItemData({
    itemName: chance.string(),
    price: chance.floating()
});

const initialState = [financedItem];

describe("FinancedItemsReducer", () => {
    test("should return initial state by default", () => {
        const reducerResult = financedItemsReducer();

        expect(reducerResult.length).toEqual(2);
    });

    test("should update a specified property with a specified value", () => {
        const updatedItemName = chance.string();
        const expectedUpdatedItem = FinancedItemData.update(financedItem, {
            itemName: {
                $set: updatedItemName
            }
        });

        const expectedUpdatedState = [expectedUpdatedItem];

        const action = {
            type: UPDATE_FINANCED_ITEMS,
            payload: {
                itemIndex: 0,
                updatedFinancedItem: expectedUpdatedItem
            }
        };

        const reducerResult = financedItemsReducer(initialState, action);

        expect(reducerResult).toEqual(expectedUpdatedState);
    });
});