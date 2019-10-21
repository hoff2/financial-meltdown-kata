import {ADD_FINANCED_ITEM, UPDATE_FINANCED_ITEMS} from "../../../src/action-creators/actions";
import * as sinon from "sinon";
import * as FinancedItemsAPI from "../../../src/api/financed-items-api";
import {addFinancedItem, fetchFinancedItems, persistFinancedItems} from "../../../src/action-creators/financed-items";
import {getDefaultFinancedItem} from "../../../src/state/financed-item-data";

describe("Financed Items Action Creator", () => {
    let dispatchSpy,
        apiPostStub,
        apiGetStub;

    beforeEach(() => {
        dispatchSpy = sinon.spy();
        apiPostStub = sinon.stub(FinancedItemsAPI, 'postFinancedItemAPI');
        apiGetStub = sinon.stub(FinancedItemsAPI, 'getFinancedItemsAPI');
    });

    afterEach(() => {
        apiPostStub.restore();
        apiGetStub.restore();
    });

    test("should add financed empty financed item", () => {

        const expectedEvent = {
            type: ADD_FINANCED_ITEM
        };

        addFinancedItem()(dispatchSpy);
        expect(dispatchSpy.calledWithExactly(expectedEvent)).toEqual(true);
    });

    describe("persistFinancedItems", () => {
        test("should call the post financed item api for each item", async () => {
            apiPostStub.returns(Promise.resolve({id: '123', itemName: "test"}));

            await persistFinancedItems([{itemName: 'test'}, {itemName: 'test2'}])(dispatchSpy);

            expect(apiPostStub.calledTwice).toEqual(true);
            expect(dispatchSpy.calledTwice).toEqual(true);
        });
    });

    describe("fetchFinancedItems", () => {
        test("should call get financed items api and store result", async () => {
            const financedItems = [getDefaultFinancedItem(), getDefaultFinancedItem()];

            apiGetStub.returns(Promise.resolve(financedItems));

            const expectedDispatch = {
                type: UPDATE_FINANCED_ITEMS,
                payload: financedItems
            };

            await fetchFinancedItems()(dispatchSpy);

            expect(apiGetStub.calledWith()).toEqual(true);
            expect(dispatchSpy.calledWithExactly(expectedDispatch)).toEqual(true);
        });
    });
});