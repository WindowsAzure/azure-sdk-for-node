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
 * Base class for non sql migration task input
 *
 */
class NonSqlMigrationTaskInput {
  /**
   * Create a NonSqlMigrationTaskInput.
   * @member {object} targetConnectionInfo Information for connecting to target
   * @member {string} [targetConnectionInfo.dataSource] Data source in the
   * format Protocol:MachineName\SQLServerInstanceName,PortNumber
   * @member {string} [targetConnectionInfo.authentication] Authentication type
   * to use for connection. Possible values include: 'None',
   * 'WindowsAuthentication', 'SqlAuthentication', 'ActiveDirectoryIntegrated',
   * 'ActiveDirectoryPassword'
   * @member {boolean} [targetConnectionInfo.encryptConnection] Whether to
   * encrypt the connection
   * @member {string} [targetConnectionInfo.additionalSettings] Additional
   * connection settings
   * @member {boolean} [targetConnectionInfo.trustServerCertificate] Whether to
   * trust the server certificate
   * @member {string} [targetConnectionInfo.platform] Server platform type for
   * connection. Possible values include: 'SqlOnPrem'
   * @member {string} targetDatabaseName Target database name
   * @member {string} projectName Name of the migration project
   * @member {string} projectLocation A URL that points to the drop location to
   * access project artifacts
   * @member {array} selectedTables Metadata of the tables selected for
   * migration
   */
  constructor() {
  }

  /**
   * Defines the metadata of NonSqlMigrationTaskInput
   *
   * @returns {object} metadata of NonSqlMigrationTaskInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NonSqlMigrationTaskInput',
      type: {
        name: 'Composite',
        className: 'NonSqlMigrationTaskInput',
        modelProperties: {
          targetConnectionInfo: {
            required: true,
            serializedName: 'targetConnectionInfo',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'ConnectionInfo',
              className: 'SqlConnectionInfo'
            }
          },
          targetDatabaseName: {
            required: true,
            serializedName: 'targetDatabaseName',
            type: {
              name: 'String'
            }
          },
          projectName: {
            required: true,
            serializedName: 'projectName',
            type: {
              name: 'String'
            }
          },
          projectLocation: {
            required: true,
            serializedName: 'projectLocation',
            type: {
              name: 'String'
            }
          },
          selectedTables: {
            required: true,
            serializedName: 'selectedTables',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NonSqlDataMigrationTableElementType',
                  type: {
                    name: 'Composite',
                    className: 'NonSqlDataMigrationTable'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = NonSqlMigrationTaskInput;