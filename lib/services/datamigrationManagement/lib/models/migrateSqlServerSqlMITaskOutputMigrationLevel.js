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
 * Class representing a MigrateSqlServerSqlMITaskOutputMigrationLevel.
 * @extends models['MigrateSqlServerSqlMITaskOutput']
 */
class MigrateSqlServerSqlMITaskOutputMigrationLevel extends models['MigrateSqlServerSqlMITaskOutput'] {
  /**
   * Create a MigrateSqlServerSqlMITaskOutputMigrationLevel.
   * @member {date} [startedOn] Migration start time
   * @member {date} [endedOn] Migration end time
   * @member {string} [status] Current status of migration. Possible values
   * include: 'Default', 'Connecting', 'SourceAndTargetSelected',
   * 'SelectLogins', 'Configured', 'Running', 'Error', 'Stopped', 'Completed',
   * 'CompletedWithWarnings'
   * @member {string} [state] Current state of migration. Possible values
   * include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed',
   * 'Skipped', 'Stopped'
   * @member {object} [agentJobs] Selected agent jobs as a map from name to id
   * @member {object} [logins] Selected logins as a map from name to id
   * @member {string} [message] Migration progress message
   * @member {object} [serverRoleResults] Map of server role migration results.
   * @member {object} [orphanedUsers] Map of users to database name of orphaned
   * users.
   * @member {object} [databases] Selected databases as a map from database
   * name to database id
   * @member {string} [sourceServerVersion] Source server version
   * @member {string} [sourceServerBrandVersion] Source server brand version
   * @member {string} [targetServerVersion] Target server version
   * @member {string} [targetServerBrandVersion] Target server brand version
   * @member {array} [exceptionsAndWarnings] Migration exceptions and warnings.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MigrateSqlServerSqlMITaskOutputMigrationLevel
   *
   * @returns {object} metadata of MigrateSqlServerSqlMITaskOutputMigrationLevel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MigrationLevelOutput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'resultType',
          clientName: 'resultType'
        },
        uberParent: 'MigrateSqlServerSqlMITaskOutput',
        className: 'MigrateSqlServerSqlMITaskOutputMigrationLevel',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          resultType: {
            required: true,
            serializedName: 'resultType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          startedOn: {
            required: false,
            readOnly: true,
            serializedName: 'startedOn',
            type: {
              name: 'DateTime'
            }
          },
          endedOn: {
            required: false,
            readOnly: true,
            serializedName: 'endedOn',
            type: {
              name: 'DateTime'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'String'
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
          agentJobs: {
            required: false,
            readOnly: true,
            serializedName: 'agentJobs',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          logins: {
            required: false,
            readOnly: true,
            serializedName: 'logins',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          serverRoleResults: {
            required: false,
            readOnly: true,
            serializedName: 'serverRoleResults',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StartMigrationScenarioServerRoleResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'StartMigrationScenarioServerRoleResult'
                  }
              }
            }
          },
          orphanedUsers: {
            required: false,
            readOnly: true,
            serializedName: 'orphanedUsers',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          databases: {
            required: false,
            readOnly: true,
            serializedName: 'databases',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sourceServerVersion: {
            required: false,
            readOnly: true,
            serializedName: 'sourceServerVersion',
            type: {
              name: 'String'
            }
          },
          sourceServerBrandVersion: {
            required: false,
            readOnly: true,
            serializedName: 'sourceServerBrandVersion',
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
          exceptionsAndWarnings: {
            required: false,
            readOnly: true,
            serializedName: 'exceptionsAndWarnings',
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

module.exports = MigrateSqlServerSqlMITaskOutputMigrationLevel;