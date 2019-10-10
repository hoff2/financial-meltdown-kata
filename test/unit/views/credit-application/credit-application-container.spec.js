import React from 'react';
import {shallow} from 'enzyme';
import CreditApplicationContainer from "../../../../src/views/credit-application/credit-application-container";

import Chance from 'chance';

const chance = new Chance();

describe("CreditApplicationContainer", () => {

    let container;

    const expectedUserId = chance.string();

    const properties = {
        userId: expectedUserId
    };

    beforeEach(() => {
        container = shallow(<CreditApplicationContainer {...properties}/>);
    });

    test("should contain header", () => {
        const header = container.find('header');

        expect(header.length).toEqual(1);
    });

    test("should display the userId", () => {
        const userId = container.find('.userId');

        expect(userId.text()).toContain(expectedUserId);
    })
});