import React from 'react';
import {shallow} from 'enzyme';
import CustomerDetails from "../../../src/components/customer-details";
import Chance from 'chance';
import CustomerDetailsData from "../../../src/state/customer-details-data";

const chance = new Chance();

describe("CustomerDetails", () => {
    let customerDetails;

    const expectedLastName = chance.string();

    const properties = {
        customerDetails: CustomerDetailsData({
            lastName: expectedLastName
        })
    };

    beforeEach(() => {
        customerDetails = shallow(<CustomerDetails {...properties} />);
    });

    test("should have a last name", () => {
        const lastName = customerDetails.find(".last-name");

        expect(lastName.length).toEqual(1);
        expect(lastName.text()).toContain("Last Name");
    });

    test("should set last name to value from props", () => {
        const lastNameInput = customerDetails.find("input");

        expect(lastNameInput.prop('value')).toEqual(expectedLastName);
    })
});