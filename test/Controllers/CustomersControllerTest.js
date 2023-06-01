/**
 * PagarmeCoreApiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");
const baseController = require("../../lib/Controllers/BaseController");

const controller = testerlib.CustomersController;
const GetCardResponse = testerlib.GetCardResponse;
const UpdateCardRequest = testerlib.UpdateCardRequest;
const GetAddressResponse = testerlib.GetAddressResponse;
const UpdateAddressRequest = testerlib.UpdateAddressRequest;
const GetAccessTokenResponse = testerlib.GetAccessTokenResponse;
const CreateAccessTokenRequest = testerlib.CreateAccessTokenRequest;
const ListAccessTokensResponse = testerlib.ListAccessTokensResponse;
const CreateAddressRequest = testerlib.CreateAddressRequest;
const ListAddressesResponse = testerlib.ListAddressesResponse;
const GetCustomerResponse = testerlib.GetCustomerResponse;
const CreateCustomerRequest = testerlib.CreateCustomerRequest;
const ListCustomersResponse = testerlib.ListCustomersResponse;
const CreateCardRequest = testerlib.CreateCardRequest;
const ListCardsResponse = testerlib.ListCardsResponse;
const UpdateCustomerRequest = testerlib.UpdateCustomerRequest;
const UpdateMetadataRequest = testerlib.UpdateMetadataRequest;

describe("CustomersController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Get all Customers
     */
    it("should testTestGetCustomers response", function testTestGetCustomersTest(done) {
        // parameters for the API call
        let name = null;
        let document = null;
        let page = 1;
        let size = 10;
        let email = null;
        let code = null;

        controller.getCustomers(name, document, page, size, email, code, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        }).catch(() => undefined);
    });

});
