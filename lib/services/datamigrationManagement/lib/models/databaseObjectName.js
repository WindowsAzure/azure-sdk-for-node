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
 * A representation of the name of an object in a database
 *
 */
class DatabaseObjectName {
  /**
   * Create a DatabaseObjectName.
   * @member {string} [databaseName] The unescaped name of the database
   * containing the object
   * @member {string} [objectName] The unescaped name of the object
   * @member {string} [schemaName] The unescaped name of the schema containing
   * the object
   * @member {string} [objectType] Type of the object in the database. Possible
   * values include: 'StoredProcedures', 'Table', 'User', 'View', 'Function'
   */
  constructor() {
  }

  /**
   * Defines the metadata of DatabaseObjectName
   *
   * @returns {object} metadata of DatabaseObjectName
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabaseObjectName',
      type: {
        name: 'Composite',
        className: 'DatabaseObjectName',
        modelProperties: {
          databaseName: {
            required: false,
            readOnly: true,
            serializedName: 'databaseName',
            type: {
              name: 'String'
            }
          },
          objectName: {
            required: false,
            readOnly: true,
            serializedName: 'objectName',
            type: {
              name: 'String'
            }
          },
          schemaName: {
            required: false,
            readOnly: true,
            serializedName: 'schemaName',
            type: {
              name: 'String'
            }
          },
          objectType: {
            required: false,
            serializedName: 'objectType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DatabaseObjectName;