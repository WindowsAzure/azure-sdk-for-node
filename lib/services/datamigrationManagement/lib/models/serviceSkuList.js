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
 * OData page of available SKUs
 */
class ServiceSkuList extends Array {
  /**
   * Create a ServiceSkuList.
   * @member {string} [nextLink] URL to load the next page of service SKUs
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServiceSkuList
   *
   * @returns {object} metadata of ServiceSkuList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceSkuList',
      type: {
        name: 'Composite',
        className: 'ServiceSkuList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AvailableServiceSkuElementType',
                  type: {
                    name: 'Composite',
                    className: 'AvailableServiceSku'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceSkuList;