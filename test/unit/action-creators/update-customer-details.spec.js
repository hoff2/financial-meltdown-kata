import * as sinon from "sinon";
import {updateCustomerDetails, updateLastName} from "../../../src/action-creators/update-customer-details";
import Chance from 'chance';
import {UPDATE_CUSTOMER_DETAILS, UPDATE_LAST_NAME} from "../../../src/action-creators/actions";
import CustomerDetailsData from "../../../src/state/customer-details-data";

const chance = new Chance()

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
    })
});