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
 * OData page of service objects
 */
class DataMigrationServiceList extends Array {
  /**
   * Create a DataMigrationServiceList.
   * @member {string} [nextLink] URL to load the next page of services
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DataMigrationServiceList
   *
   * @returns {object} metadata of DataMigrationServiceList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataMigrationServiceList',
      type: {
        name: 'Composite',
        className: 'DataMigrationServiceList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DataMigrationServiceElementType',
                  type: {
                    name: 'Composite',
                    className: 'DataMigrationService'
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

module.exports = DataMigrationServiceList;