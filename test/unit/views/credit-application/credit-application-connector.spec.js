import React from 'react';
import ReactDOM from 'react-dom';
import CreditApplicationConnector, {
    mapDispatchToProps,
    mapStateToProps
} from "../../../../src/views/credit-application/credit-application-connector";
import {Provider} from "react-redux";
import prepareStore from "../../../../src/store/store";
import Chance from 'chance';
import {getDefaultCustomerDetails} from "../../../../src/components/customer-details/customer-details-state";

const chance = new Chance();

describe("CreditApplicationConnector", () => {
    const expectedCustomerDetails = getDefaultCustomerDetails();
    const expectedState = {
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
        test("should provide updateCustomerDetails from state", () => {
            expect(mapStateToProps(expectedState).customerDetails).toEqual(expectedCustomerDetails);
        });
    });

    describe("mapDispatchToProps", () => {
        test("should provide an updateCustomerDetails action creator", () => {
            expect(mapDispatchToProps.hasOwnProperty('updateCustomerDetails')).toEqual(true);
        });

        test("should provide an updateFinancedItems action creator", () => {
            expect(mapDispatchToProps.hasOwnProperty('updateFinancedItems')).toEqual(true);
        });

        test("should provide an addFinancedItem action creator", () => {
            expect(mapDispatchToProps.hasOwnProperty('addFinancedItem')).toEqual(true);
        });

        test("should provide an persistCustomerDetails action creator", () => {
            expect(mapDispatchToProps.hasOwnProperty('persistCustomerDetails')).toEqual(true);
        });

        test("should provide an fetchCustomerDetails action creator", () => {
            expect(mapDispatchToProps.hasOwnProperty('fetchCustomerDetails')).toEqual(true);
        });

        test("should provide a persistFinancedItems action creator", () => {
            expect(mapDispatchToProps.hasOwnProperty('persistFinancedItems')).toEqual(true);
        });

        test("should provide a fetchFinancedItems action creator", () => {
            expect(mapDispatchToProps.hasOwnProperty('fetchFinancedItems')).toEqual(true);
        });
    });
});