import CustomerDetailsData from "../../../src/state/customer-details-data";
import customerDetailsReducer from "../../../src/reducers/customer-details-reducer";
import Chance from 'chance';
import {UPDATE_LAST_NAME} from "../../../src/action-creators/actions";

const chance = new Chance();

const initialState = CustomerDetailsData({
    firstName: chance.string(),
    lastName: chance.string(),
    streetAddress: chance.string(),
    city: chance.string(),
    state: chance.string(),
    phone: chance.string(),
    email: chance.string()
});

describe("CustomerDetailsReducer", () => {
    describe("updateLastName", () => {
        test("should update the last name property in customer details", () => {
            const updatedLastName = chance.string();
            const expectedUpdatedState = CustomerDetailsData.update(initialState, {
                lastName: {
                    $set: updatedLastName
                }
            });
            const action = {
                type: UPDATE_LAST_NAME,
                payload: updatedLastName
            };

            const reducerResult = customerDetailsReducer(initialState, action);

            expect(reducerResult).toEqual(expectedUpdatedState);
        });
    });
});