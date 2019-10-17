import {fetchCustomerDetails, persistCustomerDetails} from "../../../src/action-creators/update-customer-details";
import {UPDATE_CUSTOMER_DETAILS, UPDATE_FINANCED_ITEMS} from "../../../src/action-creators/actions";
import * as sinon from "sinon";
import * as FinancedItemsAPI from "../../../src/api/financed-items-api";
import {fetchFinancedItems, persistFinancedItems} from "../../../src/action-creators/financed-items";
import {getDefaultFinancedItem} from "../../../src/state/financed-item-data";

describe("Financed Items Action Creator", () => {
    const dispatchSpy = sinon.spy();
    const apiPostStub = sinon.stub(FinancedItemsAPI, 'postFinancedItemAPI');
    const apiGetStub = sinon.stub(FinancedItemsAPI, 'getFinancedItemsAPI');

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