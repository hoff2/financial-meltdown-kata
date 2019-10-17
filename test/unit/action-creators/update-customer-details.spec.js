import * as sinon from "sinon";
import {
    fetchCustomerDetails,
    persistCustomerDetails,
    updateCustomerDetails
} from "../../../src/action-creators/update-customer-details";
import Chance from 'chance';
import {UPDATE_CUSTOMER_DETAILS} from "../../../src/action-creators/actions";
import CustomerDetailsData from "../../../src/state/customer-details-data";
import * as CustomerDetailsAPI from "../../../src/api/customer-details-api";

const chance = new Chance();

const initialCustomerDetails = CustomerDetailsData({
    firstName: chance.string(),
    lastName: chance.string(),
    streetAddress: chance.string(),
    city: chance.string(),
    state: chance.string(),
    phone: chance.string(),
    email: chance.string()
});

describe("UpdateCustomerDetails", () => {
    const dispatchSpy = sinon.spy();
    const apiPostStub = sinon.stub(CustomerDetailsAPI, 'updateCustomerDetailsAPI');
    const apiGetStub = sinon.stub(CustomerDetailsAPI, 'getCustomerDetailsAPI');

    describe("updateCustomerDetails", () => {
        test("should update customer details property with value", () => {
            const expectedCustomerDetails = CustomerDetailsData.update(initialCustomerDetails, {
               firstName: {
                   $set: chance.string()
               }
            });

            const expectedEvent = {
                type: UPDATE_CUSTOMER_DETAILS,
                payload: expectedCustomerDetails
            };

            updateCustomerDetails(initialCustomerDetails, "firstName", expectedCustomerDetails.firstName)(dispatchSpy);

            expect(dispatchSpy.calledWithExactly(expectedEvent)).toEqual(true);
        });
    });

    describe("persistCustomerDetails", () => {
        test("should call the update customer details api with current details", () => {
            apiPostStub.returns(Promise.resolve({}));

            persistCustomerDetails({})(dispatchSpy);

            expect(apiPostStub.calledWith({})).toEqual(true);
        });
    });

    describe("fetchCustomerDetails", () => {
        test("should call get customer details api and store result", async () => {
            apiGetStub.returns(Promise.resolve(initialCustomerDetails));

            const expectedDispatch = {
                type: UPDATE_CUSTOMER_DETAILS,
                payload: initialCustomerDetails
            };

            await fetchCustomerDetails()(dispatchSpy);

            expect(apiGetStub.calledWith()).toEqual(true);
            expect(dispatchSpy.calledWithExactly(expectedDispatch)).toEqual(true);
        });
    });
});