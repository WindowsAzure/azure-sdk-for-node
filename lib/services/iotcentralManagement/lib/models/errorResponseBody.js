/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Details of error response.
 *
 */
class ErrorResponseBody {
  /**
   * Create a ErrorResponseBody.
   * @member {string} [code] Error code, intended to be consumed
   * programmatically.
   * @member {string} [message] Description of the error, intended for display
   * in user interface.
   * @member {string} [target] Target of the particular error, for example name
   * of the property.
   * @member {array} [details] A list of additional details about the error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorResponseBody
   *
   * @returns {object} metadata of ErrorResponseBody
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorResponseBody',
      type: {
        name: 'Composite',
        className: 'ErrorResponseBody',
        modelProperties: {
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            readOnly: true,
            serializedName: 'target',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            serializedName: 'details',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorResponseBodyElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorResponseBody'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorResponseBody;