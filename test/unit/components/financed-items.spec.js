import React from 'react';
import {shallow} from 'enzyme';
import FinancedItems from "../../../src/components/financed-items";

describe("FinancedItems", () => {
    let financedItems;

    const properties = {};

    beforeEach(() => {
        financedItems = shallow(<FinancedItems {...properties} />);
    });

    describe("Financed Items", () => {
        test("should have a header", () => {
           const header = financedItems.find('header');

           expect(header.length).toEqual(1);
        });
    })
});
