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
 * Input for the task that gets TDE certificates in Base64 encoded format.
 *
 */
class GetTdeCertificatesSqlTaskInput {
  /**
   * Create a GetTdeCertificatesSqlTaskInput.
   * @member {object} connectionInfo Connection information for SQL Server
   * @member {string} [connectionInfo.dataSource] Data source in the format
   * Protocol:MachineName\SQLServerInstanceName,PortNumber
   * @member {string} [connectionInfo.authentication] Authentication type to
   * use for connection. Possible values include: 'None',
   * 'WindowsAuthentication', 'SqlAuthentication', 'ActiveDirectoryIntegrated',
   * 'ActiveDirectoryPassword'
   * @member {boolean} [connectionInfo.encryptConnection] Whether to encrypt
   * the connection
   * @member {string} [connectionInfo.additionalSettings] Additional connection
   * settings
   * @member {boolean} [connectionInfo.trustServerCertificate] Whether to trust
   * the server certificate
   * @member {string} [connectionInfo.platform] Server platform type for
   * connection. Possible values include: 'SqlOnPrem'
   * @member {object} backupFileShare Backup file share information for file
   * share to be used for temporarily storing files.
   * @member {string} [backupFileShare.userName] User name credential to
   * connect to the share location
   * @member {string} [backupFileShare.password] Password credential used to
   * connect to the share location.
   * @member {string} [backupFileShare.path] The folder path for this share.
   * @member {array} selectedCertificates List containing certificate names and
   * corresponding password to use for encrypting the exported certificate.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetTdeCertificatesSqlTaskInput
   *
   * @returns {object} metadata of GetTdeCertificatesSqlTaskInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetTdeCertificatesSqlTaskInput',
      type: {
        name: 'Composite',
        className: 'GetTdeCertificatesSqlTaskInput',
        modelProperties: {
          connectionInfo: {
            required: true,
            serializedName: 'connectionInfo',
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
          backupFileShare: {
            required: true,
            serializedName: 'backupFileShare',
            type: {
              name: 'Composite',
              className: 'FileShare'
            }
          },
          selectedCertificates: {
            required: true,
            serializedName: 'selectedCertificates',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SelectedCertificateInputElementType',
                  type: {
                    name: 'Composite',
                    className: 'SelectedCertificateInput'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetTdeCertificatesSqlTaskInput;