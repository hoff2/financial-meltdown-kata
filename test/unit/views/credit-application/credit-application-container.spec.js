import React from 'react';
import {shallow} from 'enzyme';
import CreditApplicationContainer from "../../../../src/views/credit-application/credit-application-container";

import Chance from 'chance';
import CustomerDetails from "../../../../src/components/customer-details/customer-details";
import FinancedItems from "../../../../src/components/financed-items/financed-items";
import * as sinon from "sinon";

const chance = new Chance();

describe("CreditApplicationContainer", () => {

    let container;

    const fetchCustomerDetailsAC = sinon.spy();
    const fetchFinancedItemsAC = sinon.spy();

    const properties = {
        fetchCustomerDetails: fetchCustomerDetailsAC,
        fetchFinancedItems: fetchFinancedItemsAC
    };

    beforeEach(() => {
        container = shallow(<CreditApplicationContainer {...properties}/>);
    });

    test("should contain header", () => {
        const header = container.find('h1');

        expect(header.length).toEqual(1);
    });

    test("should have a customer details component", () => {
        const customerDetails = container.find(CustomerDetails);

        expect(customerDetails.length).toEqual(1);
    });

    test("should have a financed items component", () => {
        const financedItems = container.find(FinancedItems);

        expect(financedItems.length).toEqual(1);
    });

    test("should call fetch customer details on load", () => {
        expect(fetchCustomerDetailsAC.called).toEqual(true);
    });

    test("should call fetch financed items on load", () => {
        expect(fetchFinancedItemsAC.called).toEqual(true);
    });
});