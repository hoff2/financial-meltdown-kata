import React from 'react';
import {shallow} from 'enzyme';
import FinancedItems from "../../../src/components/financed-items";
import FinancedItemData from "../../../src/state/financed-item-data";
import Chance from 'chance';
import FinancedItem from "../../../src/components/financed-item";
import * as sinon from "sinon";

const chance = new Chance();

describe("FinancedItems", () => {
    let financedItems;

    const updateFinancedItemsACMock = () => {};
    const addFinancedItemAC = sinon.spy();

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
        addFinancedItem: addFinancedItemAC,
        financedItems: [financedItem1, financedItem2],
        updateFinancedItems: updateFinancedItemsACMock
    };

    beforeEach(() => {
        financedItems = shallow(<FinancedItems {...properties} />);
    });

    describe("Financed Items", () => {
        test("should have a header", () => {
           const header = financedItems.find('header');

           expect(header.length).toEqual(1);
        });

        test("should have an add item button", () => {
            const addButton = financedItems.find('button');

            expect(addButton.length).toEqual(1);
        });

        describe("financed item instances", () => {
            let financedItemInstances;

            beforeEach(() => {
                financedItemInstances = financedItems.find(FinancedItem);
            });

            test("should display all financed items", () => {
               expect(financedItemInstances.length).toEqual(properties.financedItems.length);
            });

            describe("first item", () => {
                let firstItem;

                beforeEach(() => {
                    firstItem = financedItemInstances.get(0);
                });

                test("should supply itemIndex property to financed item", () => {
                    expect(firstItem.props.itemIndex).toEqual(0);
                });

                test("should supply financedItem property to financed item", () => {
                    expect(firstItem.props.financedItem).toEqual(financedItem1);
                });

                test("should supply updateFinancedItems action creator to financed item", () => {
                    expect(firstItem.props.updateFinancedItems).toEqual(updateFinancedItemsACMock);
                });
            });
        });

        describe("add button", () => {
            test("should call add item action creator when button is clicked", () => {
                const addButton = financedItems.find('button');

                addButton.simulate("click");

                expect(addFinancedItemAC.calledWithExactly()).toEqual(true);
            });
        });
    })
});
