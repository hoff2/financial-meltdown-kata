import * as sinon from "sinon";
import Chance from 'chance';
import {UPDATE_FINANCED_ITEM} from "../../../src/action-creators/actions";
import FinancedItemData from "../../../src/state/financed-item-data";
import {updateFinancedItems} from "../../../src/action-creators/update-financed-items";

const chance = new Chance();

const initialFinancedItem = FinancedItemData({
    itemName: chance.string(),
    price: chance.floating(),
    minimumPayment: chance.floating(),
    rate: chance.floating()
});

describe("UpdateFinancedItems", () => {
    const dispatchSpy = sinon.spy();

    test("should update financed item property with value", () => {
        const expectedFinancedItem = FinancedItemData.update(initialFinancedItem, {
           itemName: {
               $set: chance.string()
           }
        });

        const expectedItemIndex = chance.integer();

        const expectedEvent = {
            type: UPDATE_FINANCED_ITEM,
            payload: {
                itemIndex: expectedItemIndex,
                updatedFinancedItem: expectedFinancedItem
            }
        };

        updateFinancedItems(expectedItemIndex, initialFinancedItem, "itemName", expectedFinancedItem.itemName)(dispatchSpy);
        expect(dispatchSpy.calledWithExactly(expectedEvent)).toEqual(true);
    });
});