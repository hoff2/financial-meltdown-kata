import React from 'react';
import {shallow} from 'enzyme';
import CustomerDetails from "../../../src/components/customer-details";

describe("CustomerDetails", () => {
    test("should have a last name", () => {
        const customerDetails = shallow(<CustomerDetails/>);
        const lastName = customerDetails.find(".last-name");

        expect(lastName.length).toEqual(1);
        expect(lastName.text()).toContain("Last Name");
    });
});