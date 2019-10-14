import React from 'react';
import {shallow} from 'enzyme';
import Chance from 'chance';
import * as sinon from "sinon";
import FinancedItemData from "../../../src/state/financed-item-data";
import FinancedItem from "../../../src/components/financed-item";

const chance = new Chance();

describe("Financed Item", () => {
    let financedItem;

    const updateFinancedItemsAC = sinon.spy();

    const financedItemData = FinancedItemData({
        itemName: chance.string(),
        price: chance.floating(),
        minimumPayment: chance.floating(),
        rate: chance.floating()
    });

    const properties = {
        financedItem: financedItemData,
        itemIndex: 0,
        updateFinancedItems: updateFinancedItemsAC
    };

    beforeEach(() => {
        financedItem = shallow(<FinancedItem {...properties} />);
    });

    describe("Item Name", () => {
        test("should have an itemName", () => {
            const itemName = financedItem.find(".itemName");

            expect(itemName.length).toEqual(1);
            expect(itemName.text()).toContain("Item Name");
        });

        describe("input", () => {
            let itemInput;

            beforeEach(() => {
                itemInput = financedItem.find(".itemName>input");
            });

            test("should set itemName to value from props", () => {
                expect(itemInput.prop('value')).toEqual(properties.financedItem.itemName);
            });

            test("should call update customer details when itemName is changed", () => {
                const fieldName = "itemName";
                const updatedItemName = chance.string();
                const itemIndex = 0;

                itemInput.simulate('change', {target: {name: fieldName, value: updatedItemName}});

                expect(updateFinancedItemsAC.calledWithExactly(itemIndex, properties.financedItem, fieldName, updatedItemName)).toBe(true);
            });
        });
    });

    describe("Price", () => {
        test("should have a price", () => {
            const price = financedItem.find(".price");

            expect(price.length).toEqual(1);
            expect(price.text()).toContain("Price");
        });

        describe("input", () => {
            let priceInput;

            beforeEach(() => {
                priceInput = financedItem.find(".price>input");
            });

            test("should set price to value from props", () => {
                expect(priceInput.prop('value')).toEqual(properties.financedItem.price);
            });

            test("should call update customer details when price is changed", () => {
                const fieldName = "price";
                const updatedPrice = chance.string();
                const itemIndex = 0;

                priceInput.simulate('change', {target: {name: fieldName, value: updatedPrice}});

                expect(updateFinancedItemsAC.calledWithExactly(itemIndex, properties.financedItem, fieldName, parseFloat(updatedPrice))).toBe(true);
            });
        });
    });

    describe("Minimum Payment", () => {
        let minimumPayment;

        beforeEach(() => {
            minimumPayment = financedItem.find(".minimum-payment");
        });

        test("should have a minimum payment", () => {

            expect(minimumPayment.length).toEqual(1);
            expect(minimumPayment.text()).toContain("Minimum Payment");
        });

        test("should set minimum payment to value from props", () => {
            const minimumPaymentValue = minimumPayment.find('.value');
            expect(minimumPaymentValue.text()).toContain(properties.financedItem.minimumPayment);
        });
    });

    describe("Rate", () => {
        let rate;

        beforeEach(() => {
            rate = financedItem.find(".rate");
        });

        test("should have a rate", () => {

            expect(rate.length).toEqual(1);
            expect(rate.text()).toContain("Rate");
        });

        test("should set rate to value from props", () => {
            const rateValue = rate.find('.value');
            expect(rateValue.text()).toContain(properties.financedItem.rate);
        });
    });
});
