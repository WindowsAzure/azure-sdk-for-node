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

const models = require('./index');

/**
 * Properties for the task that validates MySQL database connection
 *
 * @extends models['ProjectTaskProperties']
 */
class ConnectToSourceMySqlTaskProperties extends models['ProjectTaskProperties'] {
  /**
   * Create a ConnectToSourceMySqlTaskProperties.
   * @member {object} [input] Task input
   * @member {object} [input.sourceConnectionInfo] Information for connecting
   * to MySQL source
   * @member {string} [input.sourceConnectionInfo.serverName] Name of the
   * server
   * @member {number} [input.sourceConnectionInfo.port] Port for Server
   * @member {string} [input.targetPlatform] Target Platform for the migration.
   * Possible values include: 'AzureDbForMySQL'
   * @member {string} [input.checkPermissionsGroup] Permission group for
   * validations. Possible values include: 'Default',
   * 'MigrationFromSqlServerToAzureDB', 'MigrationFromSqlServerToAzureMI',
   * 'MigrationFromMySQLToAzureDBForMySQL'
   * @member {array} [output] Task output. This is ignored if submitted.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ConnectToSourceMySqlTaskProperties
   *
   * @returns {object} metadata of ConnectToSourceMySqlTaskProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectToSource.MySql',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'taskType',
          clientName: 'taskType'
        },
        uberParent: 'ProjectTaskProperties',
        className: 'ConnectToSourceMySqlTaskProperties',
        modelProperties: {
          errors: {
            required: false,
            readOnly: true,
            serializedName: 'errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ODataErrorElementType',
                  type: {
                    name: 'Composite',
                    className: 'ODataError'
                  }
              }
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          commands: {
            required: false,
            readOnly: true,
            serializedName: 'commands',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CommandPropertiesElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'commandType',
                      clientName: 'commandType'
                    },
                    uberParent: 'CommandProperties',
                    className: 'CommandProperties'
                  }
              }
            }
          },
          taskType: {
            required: true,
            serializedName: 'taskType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          input: {
            required: false,
            serializedName: 'input',
            type: {
              name: 'Composite',
              className: 'ConnectToSourceMySqlTaskInput'
            }
          },
          output: {
            required: false,
            readOnly: true,
            serializedName: 'output',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ConnectToSourceNonSqlTaskOutputElementType',
                  type: {
                    name: 'Composite',
                    className: 'ConnectToSourceNonSqlTaskOutput'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectToSourceMySqlTaskProperties;