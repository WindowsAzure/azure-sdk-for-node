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
 * Input for the task that validates connection to SQL Server and also
 * validates source server requirements
 *
 */
class ConnectToSourceSqlServerTaskInput {
  /**
   * Create a ConnectToSourceSqlServerTaskInput.
   * @member {object} sourceConnectionInfo Connection information for Source
   * SQL Server
   * @member {string} [sourceConnectionInfo.dataSource] Data source in the
   * format Protocol:MachineName\SQLServerInstanceName,PortNumber
   * @member {string} [sourceConnectionInfo.authentication] Authentication type
   * to use for connection. Possible values include: 'None',
   * 'WindowsAuthentication', 'SqlAuthentication', 'ActiveDirectoryIntegrated',
   * 'ActiveDirectoryPassword'
   * @member {boolean} [sourceConnectionInfo.encryptConnection] Whether to
   * encrypt the connection
   * @member {string} [sourceConnectionInfo.additionalSettings] Additional
   * connection settings
   * @member {boolean} [sourceConnectionInfo.trustServerCertificate] Whether to
   * trust the server certificate
   * @member {string} [sourceConnectionInfo.platform] Server platform type for
   * connection. Possible values include: 'SqlOnPrem'
   * @member {string} [checkPermissionsGroup] Permission group for validations.
   * Possible values include: 'Default', 'MigrationFromSqlServerToAzureDB',
   * 'MigrationFromSqlServerToAzureMI', 'MigrationFromMySQLToAzureDBForMySQL'
   * @member {boolean} [collectLogins] Flag for whether to collect logins from
   * source server. Default value: false .
   * @member {boolean} [collectAgentJobs] Flag for whether to collect agent
   * jobs from source server. Default value: false .
   * @member {boolean} [collectTdeCertificateInfo] Flag for whether to collect
   * TDE Certificate names from source server. Default value: false .
   */
  constructor() {
  }

  /**
   * Defines the metadata of ConnectToSourceSqlServerTaskInput
   *
   * @returns {object} metadata of ConnectToSourceSqlServerTaskInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectToSourceSqlServerTaskInput',
      type: {
        name: 'Composite',
        className: 'ConnectToSourceSqlServerTaskInput',
        modelProperties: {
          sourceConnectionInfo: {
            required: true,
            serializedName: 'sourceConnectionInfo',
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
          checkPermissionsGroup: {
            required: false,
            serializedName: 'checkPermissionsGroup',
            type: {
              name: 'String'
            }
          },
          collectLogins: {
            required: false,
            serializedName: 'collectLogins',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          collectAgentJobs: {
            required: false,
            serializedName: 'collectAgentJobs',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          collectTdeCertificateInfo: {
            required: false,
            serializedName: 'collectTdeCertificateInfo',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectToSourceSqlServerTaskInput;