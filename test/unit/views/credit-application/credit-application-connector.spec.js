import React from 'react';
import ReactDOM from 'react-dom';
import CreditApplicationConnector, {
    mapDispatchToProps,
    mapStateToProps
} from "../../../../src/views/credit-application/credit-application-connector";
import {Provider} from "react-redux";
import prepareStore from "../../../../src/store/store";
import Chance from 'chance';
import {getDefaultCustomerDetails} from "../../../../src/state/customer-details-data";

const chance = new Chance();

describe("CreditApplicationConnector", () => {
    const expectedUserId = chance.string();
    const expectedCustomerDetails = getDefaultCustomerDetails();
    const expectedState = {
        userId: expectedUserId,
        customerDetails: expectedCustomerDetails
    };

    test("should render a CreditApplicationConnector", () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={prepareStore(expectedState)}>
                <CreditApplicationConnector/>
            </Provider>, div
        );
    });

    describe("mapStateToProps", () => {
        test("should provide a userId from state", () => {
           expect(mapStateToProps(expectedState).userId).toEqual(expectedUserId);
        });

        test("should provide customerDetails from state", () => {
            expect(mapStateToProps(expectedState).customerDetails).toEqual(expectedCustomerDetails);
        });
    });

    describe("mapDispatchToProps", () => {
        test("should provide an updateLastName action creator", () => {
            expect(mapDispatchToProps.hasOwnProperty('updateLastName')).toEqual(true);
        });
    });
});