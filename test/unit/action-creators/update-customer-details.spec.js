import * as sinon from "sinon";
import {persistCustomerDetails, updateCustomerDetails} from "../../../src/action-creators/update-customer-details";
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
    const apiStub = sinon.stub(CustomerDetailsAPI, 'updateCustomerDetailsAPI');

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
            apiStub.returns(Promise.resolve({}));

            persistCustomerDetails({});

            expect(apiStub.calledWith({})).toEqual(true);
        });
    });
});