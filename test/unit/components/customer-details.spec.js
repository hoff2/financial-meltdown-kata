import React from 'react';
import {shallow} from 'enzyme';
import CustomerDetails from "../../../src/components/customer-details";
import Chance from 'chance';
import CustomerDetailsData from "../../../src/state/customer-details-data";
import * as sinon from "sinon";

const chance = new Chance();

describe("CustomerDetails", () => {
    let customerDetails;

    const updateLastNameAC = sinon.spy();

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
        updateLastName: updateLastNameAC
    };

    beforeEach(() => {
        customerDetails = shallow(<CustomerDetails {...properties} />);
    });

    test("should have a first name", () => {
        const lastName = customerDetails.find(".first-name");

        expect(lastName.length).toEqual(1);
        expect(lastName.text()).toContain("First Name");
    });

    test("should have a last name", () => {
        const lastName = customerDetails.find(".last-name");

        expect(lastName.length).toEqual(1);
        expect(lastName.text()).toContain("Last Name");
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

    test("should set last name to value from props", () => {
        const lastNameInput = customerDetails.find(".last-name>input");

        expect(lastNameInput.prop('value')).toEqual(properties.customerDetails.lastName);
    });

    test("should call action creator when last name is changed", () => {
        const lastNameInput = customerDetails.find(".last-name>input");

        lastNameInput.simulate('change', {target: {value: 'ugh'}});

        expect(updateLastNameAC.calledOnce).toBe(true);
    });
});