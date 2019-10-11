import CustomerDetailsData from "../../../src/state/customer-details-data";
import customerDetailsReducer from "../../../src/reducers/customer-details-reducer";
import Chance from 'chance';

const chance = new Chance();

describe("CustomerDetailsReducer", () => {
    describe("updateLastName", () => {
        test("should update the last name property in customer details", () => {
            const expectedUpdatedLastName = chance.string();
            const previousState = CustomerDetailsData({lastName: 'previouslastname'});
            const expectedUpdatedState = CustomerDetailsData.update(previousState, {
                lastName: {
                    $set: expectedUpdatedLastName
                }
            });
            const action = {
                type: 'UPDATE_LAST_NAME',
                payload: expectedUpdatedLastName
            };

            const reducerResult = customerDetailsReducer(previousState, action);

            expect(reducerResult).toEqual(expectedUpdatedState);
        });
    });
});