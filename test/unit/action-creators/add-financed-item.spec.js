import * as sinon from "sinon";
import Chance from 'chance';
import {ADD_FINANCED_ITEM} from "../../../src/action-creators/actions";
import FinancedItemData from "../../../src/state/financed-item-data";
import {addFinancedItem} from "../../../src/action-creators/add-financed-item";

const chance = new Chance();

const initialFinancedItem = FinancedItemData({
    itemName: chance.string(),
    price: chance.floating(),
    minimumPayment: chance.floating(),
    rate: chance.floating()
});

describe("AddFinancedItem", () => {
    const dispatchSpy = sinon.spy();

    test("should add financed empty financed item", () => {

        const expectedEvent = {
            type: ADD_FINANCED_ITEM
        };

        addFinancedItem()(dispatchSpy);
        expect(dispatchSpy.calledWithExactly(expectedEvent)).toEqual(true);
    });
});