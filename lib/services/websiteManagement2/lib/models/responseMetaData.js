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
 * Class representing a ResponseMetaData.
 */
class ResponseMetaData {
  /**
   * Create a ResponseMetaData.
   * @member {object} [dataSource] Source of the Data
   * @member {array} [dataSource.instructions] Instrunctions if any for the
   * data source
   * @member {array} [dataSource.dataSourceUri] Datasource Uri Links
   */
  constructor() {
  }

  /**
   * Defines the metadata of ResponseMetaData
   *
   * @returns {object} metadata of ResponseMetaData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResponseMetaData',
      type: {
        name: 'Composite',
        className: 'ResponseMetaData',
        modelProperties: {
          dataSource: {
            required: false,
            serializedName: 'dataSource',
            type: {
              name: 'Composite',
              className: 'DataSource'
            }
          }
        }
      }
    };
  }
}

module.exports = ResponseMetaData;