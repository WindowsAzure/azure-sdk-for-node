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
 * Class representing a MigrateSqlServerSqlDbTaskOutputMigrationLevel.
 * @extends models['MigrateSqlServerSqlDbTaskOutput']
 */
class MigrateSqlServerSqlDbTaskOutputMigrationLevel extends models['MigrateSqlServerSqlDbTaskOutput'] {
  /**
   * Create a MigrateSqlServerSqlDbTaskOutputMigrationLevel.
   * @member {date} [startedOn] Migration start time
   * @member {date} [endedOn] Migration end time
   * @member {number} [durationInSeconds] Duration of task execution in
   * seconds.
   * @member {string} [status] Current status of migration. Possible values
   * include: 'Default', 'Connecting', 'SourceAndTargetSelected',
   * 'SelectLogins', 'Configured', 'Running', 'Error', 'Stopped', 'Completed',
   * 'CompletedWithWarnings'
   * @member {string} [statusMessage] Migration status message
   * @member {string} [message] Migration progress message
   * @member {object} [databases] Selected databases as a map from database
   * name to database id
   * @member {object} [databaseSummary] Summary of database results in the
   * migration
   * @member {object} [migrationValidationResult] Migration Validation Results
   * @member {string} [migrationValidationResult.id] Migration validation
   * result identifier
   * @member {string} [migrationValidationResult.migrationId] Migration
   * Identifier
   * @member {object} [migrationValidationResult.summaryResults] Validation
   * summary results for each database
   * @member {string} [migrationValidationResult.status] Current status of
   * validation at the migration level. Status from the database validation
   * result status will be aggregated here. Possible values include: 'Default',
   * 'NotStarted', 'Initialized', 'InProgress', 'Completed',
   * 'CompletedWithIssues', 'Stopped', 'Failed'
   * @member {object} [migrationReportResult] Migration Report Result, provides
   * unique url for downloading your migration report.
   * @member {string} [migrationReportResult.id] Migration validation result
   * identifier
   * @member {string} [migrationReportResult.reportUrl] The url of the report.
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
   * Defines the metadata of MigrateSqlServerSqlDbTaskOutputMigrationLevel
   *
   * @returns {object} metadata of MigrateSqlServerSqlDbTaskOutputMigrationLevel
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
        uberParent: 'MigrateSqlServerSqlDbTaskOutput',
        className: 'MigrateSqlServerSqlDbTaskOutputMigrationLevel',
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
          durationInSeconds: {
            required: false,
            readOnly: true,
            serializedName: 'durationInSeconds',
            type: {
              name: 'Number'
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
          statusMessage: {
            required: false,
            readOnly: true,
            serializedName: 'statusMessage',
            type: {
              name: 'String'
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
          databaseSummary: {
            required: false,
            readOnly: true,
            serializedName: 'databaseSummary',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'DatabaseSummaryResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'DatabaseSummaryResult'
                  }
              }
            }
          },
          migrationValidationResult: {
            required: false,
            serializedName: 'migrationValidationResult',
            type: {
              name: 'Composite',
              className: 'MigrationValidationResult'
            }
          },
          migrationReportResult: {
            required: false,
            serializedName: 'migrationReportResult',
            type: {
              name: 'Composite',
              className: 'MigrationReportResult'
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

module.exports = MigrateSqlServerSqlDbTaskOutputMigrationLevel;