import * as sinon from "sinon";
import {updateLastName} from "../../../src/action-creators/update-customer-details";
import Chance from 'chance';
import {UPDATE_LAST_NAME} from "../../../src/action-creators/actions";

const chance = new Chance();

describe("UpdateCustomerDetails", () => {
    const dispatchSpy = sinon.spy();

    describe("updateLastName", () => {
        let expectedLastName;

        beforeEach(() => {
            expectedLastName = chance.string();
        });

        test("should emit action with updated last name", () => {
            const expectedEvent = {
                type: UPDATE_LAST_NAME,
                payload: expectedLastName
            };

            updateLastName(expectedLastName)(dispatchSpy);

            expect(dispatchSpy.calledWithExactly(expectedEvent)).toEqual(true);
        });
    });
});