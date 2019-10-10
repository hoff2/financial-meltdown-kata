import React from 'react';
import ReactDOM from 'react-dom';
import CreditApplicationConnector from '../../../../src/views/credit-application/credit-application-connector';
import {Provider} from "react-redux";
import prepareStore from "../../../../src/store/store";

describe("CreditApplicationConnector", () => {
    test("should render a CreditApplicationContainer", () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={prepareStore()}>
                <CreditApplicationConnector/>
            </Provider>, div
        );
    });
});