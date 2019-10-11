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

    const expectedLastName = chance.string();

    const properties = {
        customerDetails: CustomerDetailsData({
            lastName: expectedLastName
        }),
        updateLastName: updateLastNameAC
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
    });

    test("should call action creator when last name is changed", () => {
        const lastNameInput = customerDetails.find("input");

        lastNameInput.simulate('change', {target: {value: 'ugh'}});

        expect(updateLastNameAC.calledOnce).toBe(true);
    });
});