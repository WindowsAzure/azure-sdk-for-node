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
 * Indicates whether a proposed resource name is available
 *
 */
class NameAvailabilityResponse {
  /**
   * Create a NameAvailabilityResponse.
   * @member {boolean} [nameAvailable] If true, the name is valid and
   * available. If false, 'reason' describes why not.
   * @member {string} [reason] The reason why the name is not available, if
   * nameAvailable is false. Possible values include: 'AlreadyExists',
   * 'Invalid'
   * @member {string} [message] The localized reason why the name is not
   * available, if nameAvailable is false
   */
  constructor() {
  }

  /**
   * Defines the metadata of NameAvailabilityResponse
   *
   * @returns {object} metadata of NameAvailabilityResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NameAvailabilityResponse',
      type: {
        name: 'Composite',
        className: 'NameAvailabilityResponse',
        modelProperties: {
          nameAvailable: {
            required: false,
            serializedName: 'nameAvailable',
            type: {
              name: 'Boolean'
            }
          },
          reason: {
            required: false,
            serializedName: 'reason',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NameAvailabilityResponse;