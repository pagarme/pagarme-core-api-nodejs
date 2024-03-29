/**
 * PagarmeCoreApiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const APIException = require('./APIException');

/**
 * Creates an instance of ErrorException
 */
class ErrorException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * TODO: Write general description for this field
         */
        this.message = null;

        /**
         * TODO: Write general description for this field
         */
        this.errors = null;

        /**
         * TODO: Write general description for this field
         */
        this.request = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'message', realName: 'message' },
            { name: 'errors', realName: 'errors' },
            { name: 'request', realName: 'request' },
        ]);
    }
}

module.exports = ErrorException;
