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
 * Output for the task that validates connection to Azure SQL Database Managed
 * Instance.
 *
 */
class ConnectToTargetSqlMITaskOutput {
  /**
   * Create a ConnectToTargetSqlMITaskOutput.
   * @member {string} [id] Result identifier
   * @member {string} [targetServerVersion] Target server version
   * @member {string} [targetServerBrandVersion] Target server brand version
   * @member {array} [logins] List of logins on the target server.
   * @member {array} [agentJobs] List of agent jobs on the target server.
   * @member {array} [validationErrors] Validation errors
   */
  constructor() {
  }

  /**
   * Defines the metadata of ConnectToTargetSqlMITaskOutput
   *
   * @returns {object} metadata of ConnectToTargetSqlMITaskOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectToTargetSqlMITaskOutput',
      type: {
        name: 'Composite',
        className: 'ConnectToTargetSqlMITaskOutput',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          targetServerVersion: {
            required: false,
            readOnly: true,
            serializedName: 'targetServerVersion',
            type: {
              name: 'String'
            }
          },
          targetServerBrandVersion: {
            required: false,
            readOnly: true,
            serializedName: 'targetServerBrandVersion',
            type: {
              name: 'String'
            }
          },
          logins: {
            required: false,
            readOnly: true,
            serializedName: 'logins',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          agentJobs: {
            required: false,
            readOnly: true,
            serializedName: 'agentJobs',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          validationErrors: {
            required: false,
            readOnly: true,
            serializedName: 'validationErrors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReportableExceptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ReportableException'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectToTargetSqlMITaskOutput;