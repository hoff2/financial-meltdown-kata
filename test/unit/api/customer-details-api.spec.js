import {getCustomerDetailsAPI, updateCustomerDetailsAPI} from "../../../src/api/customer-details-api";

describe('customer details api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    });

    test('should post customer details and return result', (done) => {
        fetch.mockResponseOnce(JSON.stringify({ firstName: 'test' }));

        updateCustomerDetailsAPI({}).then(res => {
            expect(res.firstName).toEqual("test");
            done();
        }).catch((error) => {
            done.fail(error);
        });

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual('http://localhost:8080/customerDetails')
    });

    test('should get customer details and return result', (done) => {
        fetch.mockResponseOnce(JSON.stringify({firstName: 'test'}));

        getCustomerDetailsAPI().then(res => {
            expect(res.firstName).toEqual("test");
            done();
        }).catch((error) => {
            done.fail(error);
        });

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual('http://localhost:8080/customerDetails');
    });
});