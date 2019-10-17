import React from 'react';
import financedItemsReducer from "../../../src/reducers/financed-items-reducer";
import {ADD_FINANCED_ITEM, UPDATE_FINANCED_ITEM, UPDATE_FINANCED_ITEMS} from "../../../src/action-creators/actions";
import Chance from 'chance';
import FinancedItemData, {getDefaultFinancedItem} from "../../../src/state/financed-item-data";

const chance = new Chance();

const financedItem = FinancedItemData({
    itemName: chance.string(),
    price: chance.floating()
});

const initialState = [financedItem];

describe("FinancedItemsReducer", () => {
    test("should return initial state by default", () => {
        const reducerResult = financedItemsReducer();

        expect(reducerResult.length).toEqual(1);
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
            type: UPDATE_FINANCED_ITEM,
            payload: {
                itemIndex: 0,
                updatedFinancedItem: expectedUpdatedItem
            }
        };

        const reducerResult = financedItemsReducer(initialState, action);

        expect(reducerResult).toEqual(expectedUpdatedState);
    });

    test("should update all financed items", () => {
        const newItems = [getDefaultFinancedItem(), getDefaultFinancedItem()];
        const action = {
            type: UPDATE_FINANCED_ITEMS,
            payload: newItems
        };

        const reducerResult = financedItemsReducer(initialState, action);

        expect(reducerResult.length).toEqual(initialState.length + 1);
    });

    test("should add an empty financed item", () => {
        const action = {
            type: ADD_FINANCED_ITEM
        };

        const reducerResult = financedItemsReducer(initialState, action);

        expect(reducerResult.length).toEqual(initialState.length + 1);
    });
});