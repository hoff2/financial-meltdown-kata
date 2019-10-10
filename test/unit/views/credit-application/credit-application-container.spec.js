import React from 'react';
import {shallow} from 'enzyme';
import CreditApplicationContainer from "../../../../src/views/credit-application/credit-application-container";

describe("CreditApplicationContainer", () => {
    test("should contain header", () => {
        const container = shallow(<CreditApplicationContainer/>);
        const header = container.find('header');

        expect(header.length).toEqual(1);
    });
});