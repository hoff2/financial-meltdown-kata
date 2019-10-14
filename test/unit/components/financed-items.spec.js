import React from 'react';
import {shallow} from 'enzyme';
import FinancedItems from "../../../src/components/financed-items";
import FinancedItemData from "../../../src/state/financed-item-data";
import Chance from 'chance';
import FinancedItem from "../../../src/components/financed-item";

const chance = new Chance();

describe("FinancedItems", () => {
    let financedItems;

    const financedItem1 = FinancedItemData({
        itemName: chance.string(),
        price: chance.floating(),
        minimumPayment: chance.floating(),
        rate: chance.floating()
    });

    const financedItem2 = FinancedItemData({
        itemName: chance.string(),
        price: chance.floating(),
        minimumPayment: chance.floating(),
        rate: chance.floating()
    });

    const properties = {
        financedItems: [financedItem1, financedItem2]
    };

    beforeEach(() => {
        financedItems = shallow(<FinancedItems {...properties} />);
    });

    describe("Financed Items", () => {
        test("should have a header", () => {
           const header = financedItems.find('header');

           expect(header.length).toEqual(1);
        });

        test("should display all financed items", () => {
           const financedItemInstances = financedItems.find(FinancedItem);

           expect(financedItemInstances.length).toEqual(properties.financedItems.length);
        });
    })
});
