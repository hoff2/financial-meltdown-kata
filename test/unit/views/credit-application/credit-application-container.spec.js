import React from 'react';
import {shallow} from 'enzyme';
import CreditApplicationContainer from "../../../../src/views/credit-application/credit-application-container";

import Chance from 'chance';
import CustomerDetails from "../../../../src/components/customer-details";
import FinancedItems from "../../../../src/components/financed-items";

const chance = new Chance();

describe("CreditApplicationContainer", () => {

    let container;

    const properties = {};

    beforeEach(() => {
        container = shallow(<CreditApplicationContainer {...properties}/>);
    });

    test("should contain header", () => {
        const header = container.find('header');

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
});