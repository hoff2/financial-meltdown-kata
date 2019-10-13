import React from 'react';
import {shallow} from 'enzyme';
import CustomerDetails from "../../../src/components/customer-details";
import Chance from 'chance';
import CustomerDetailsData from "../../../src/state/customer-details-data";
import * as sinon from "sinon";

const chance = new Chance();

describe("CustomerDetails", () => {
    let customerDetails;

    const updateCustomerDetailsAC = sinon.spy();

    const properties = {
        customerDetails: CustomerDetailsData({
            firstName: chance.string(),
            lastName: chance.string(),
            streetAddress: chance.string(),
            city: chance.string(),
            state: chance.string(),
            phone: chance.string(),
            email: chance.string()
        }),
        updateCustomerDetails: updateCustomerDetailsAC
    };

    beforeEach(() => {
        customerDetails = shallow(<CustomerDetails {...properties} />);
    });

    describe("First Name", () => {
        test("should have a first name", () => {
            const firstName = customerDetails.find(".first-name");

            expect(firstName.length).toEqual(1);
            expect(firstName.text()).toContain("First Name");
        });

        describe("input", () => {
            let firstNameInput;

            beforeEach(() => {
                firstNameInput = customerDetails.find(".first-name>input");
            });

            test("should set first name to value from props", () => {
                expect(firstNameInput.prop('value')).toEqual(properties.customerDetails.firstName);
            });

            test("should call update customer details when first name is changed", () => {
                const fieldName = "firstName";
                const updatedFirstName = chance.string();

                firstNameInput.simulate('change', {target: {name: fieldName, value: updatedFirstName}});

                expect(updateCustomerDetailsAC.calledWithExactly(properties.customerDetails, fieldName, updatedFirstName)).toBe(true);
            });
        });
    });

    describe("Last Name", () => {
        test("should have a last name", () => {
            const lastName = customerDetails.find(".last-name");

            expect(lastName.length).toEqual(1);
            expect(lastName.text()).toContain("Last Name");
        });

        describe("input", () => {
            let lastNameInput;

            beforeEach(() => {
                lastNameInput = customerDetails.find(".last-name>input");
            });

            test("should set last name to value from props", () => {

                expect(lastNameInput.prop('value')).toEqual(properties.customerDetails.lastName);
            });

            test("should update customer details when last name is changed", () => {
                const fieldName = "lastName";
                const updatedLastName = chance.string();

                lastNameInput.simulate('change', {target: {name: fieldName, value: updatedLastName}});

                expect(updateCustomerDetailsAC.calledWithExactly(properties.customerDetails, fieldName, updatedLastName)).toBe(true);
            });
        });
    });

    test("should have a street address", () => {
        const lastName = customerDetails.find(".street-address");

        expect(lastName.length).toEqual(1);
        expect(lastName.text()).toContain("Street Address");
    });

    test("should have a city", () => {
        const lastName = customerDetails.find(".city");

        expect(lastName.length).toEqual(1);
        expect(lastName.text()).toContain("City");
    });

    test("should have a state", () => {
        const lastName = customerDetails.find(".state");

        expect(lastName.length).toEqual(1);
        expect(lastName.text()).toContain("State");
    });

    test("should have a phone", () => {
        const lastName = customerDetails.find(".phone");

        expect(lastName.length).toEqual(1);
        expect(lastName.text()).toContain("Phone");
    });

    test("should have a email", () => {
        const lastName = customerDetails.find(".email");

        expect(lastName.length).toEqual(1);
        expect(lastName.text()).toContain("Email");
    });
});