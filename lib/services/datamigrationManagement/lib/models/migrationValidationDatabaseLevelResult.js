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
 * Database level validation results
 *
 */
class MigrationValidationDatabaseLevelResult {
  /**
   * Create a MigrationValidationDatabaseLevelResult.
   * @member {string} [id] Result identifier
   * @member {string} [migrationId] Migration Identifier
   * @member {string} [sourceDatabaseName] Name of the source database
   * @member {string} [targetDatabaseName] Name of the target database
   * @member {date} [startedOn] Validation start time
   * @member {date} [endedOn] Validation end time
   * @member {object} [dataIntegrityValidationResult] Provides data integrity
   * validation result between the source and target tables that are migrated.
   * @member {object} [dataIntegrityValidationResult.failedObjects] List of
   * failed table names of source and target pair
   * @member {object} [dataIntegrityValidationResult.validationErrors] List of
   * errors that happened while performing data integrity validation
   * @member {string} [dataIntegrityValidationResult.validationErrors.text]
   * Error Text
   * @member {string} [dataIntegrityValidationResult.validationErrors.severity]
   * Severity of the error. Possible values include: 'Message', 'Warning',
   * 'Error'
   * @member {object} [schemaValidationResult] Provides schema comparison
   * result between source and target database
   * @member {object} [schemaValidationResult.schemaDifferences] List of schema
   * differences between the source and target databases
   * @member {string} [schemaValidationResult.schemaDifferences.objectName]
   * Name of the object that has the difference
   * @member {string} [schemaValidationResult.schemaDifferences.objectType]
   * Type of the object that has the difference. e.g
   * (Table/View/StoredProcedure). Possible values include: 'StoredProcedures',
   * 'Table', 'User', 'View', 'Function'
   * @member {string} [schemaValidationResult.schemaDifferences.updateAction]
   * Update action type with respect to target. Possible values include:
   * 'DeletedOnTarget', 'ChangedOnTarget', 'AddedOnTarget'
   * @member {object} [schemaValidationResult.validationErrors] List of errors
   * that happened while performing schema compare validation
   * @member {string} [schemaValidationResult.validationErrors.text] Error Text
   * @member {string} [schemaValidationResult.validationErrors.severity]
   * Severity of the error. Possible values include: 'Message', 'Warning',
   * 'Error'
   * @member {object} [schemaValidationResult.sourceDatabaseObjectCount] Count
   * of source database objects
   * @member {object} [schemaValidationResult.targetDatabaseObjectCount] Count
   * of target database objects
   * @member {object} [queryAnalysisValidationResult] Results of some of the
   * query execution result between source and target database
   * @member {object} [queryAnalysisValidationResult.queryResults] List of
   * queries executed and it's execution results in source and target
   * @member {string} [queryAnalysisValidationResult.queryResults.queryText]
   * Query text retrieved from the source server
   * @member {number}
   * [queryAnalysisValidationResult.queryResults.statementsInBatch] Total no.
   * of statements in the batch
   * @member {object} [queryAnalysisValidationResult.queryResults.sourceResult]
   * Query analysis result from the source
   * @member {number}
   * [queryAnalysisValidationResult.queryResults.sourceResult.executionCount]
   * No. of query executions
   * @member {number}
   * [queryAnalysisValidationResult.queryResults.sourceResult.cpuTimeMs] CPU
   * Time in millisecond(s) for the query execution
   * @member {number}
   * [queryAnalysisValidationResult.queryResults.sourceResult.elapsedTimeMs]
   * Time taken in millisecond(s) for executing the query
   * @member {object}
   * [queryAnalysisValidationResult.queryResults.sourceResult.waitStats]
   * Dictionary of sql query execution wait types and the respective statistics
   * @member {boolean}
   * [queryAnalysisValidationResult.queryResults.sourceResult.hasErrors]
   * Indicates whether the query resulted in an error
   * @member {array}
   * [queryAnalysisValidationResult.queryResults.sourceResult.sqlErrors] List
   * of sql Errors
   * @member {object} [queryAnalysisValidationResult.queryResults.targetResult]
   * Query analysis result from the target
   * @member {number}
   * [queryAnalysisValidationResult.queryResults.targetResult.executionCount]
   * No. of query executions
   * @member {number}
   * [queryAnalysisValidationResult.queryResults.targetResult.cpuTimeMs] CPU
   * Time in millisecond(s) for the query execution
   * @member {number}
   * [queryAnalysisValidationResult.queryResults.targetResult.elapsedTimeMs]
   * Time taken in millisecond(s) for executing the query
   * @member {object}
   * [queryAnalysisValidationResult.queryResults.targetResult.waitStats]
   * Dictionary of sql query execution wait types and the respective statistics
   * @member {boolean}
   * [queryAnalysisValidationResult.queryResults.targetResult.hasErrors]
   * Indicates whether the query resulted in an error
   * @member {array}
   * [queryAnalysisValidationResult.queryResults.targetResult.sqlErrors] List
   * of sql Errors
   * @member {object} [queryAnalysisValidationResult.validationErrors] Errors
   * that are part of the execution
   * @member {string} [queryAnalysisValidationResult.validationErrors.text]
   * Error Text
   * @member {string} [queryAnalysisValidationResult.validationErrors.severity]
   * Severity of the error. Possible values include: 'Message', 'Warning',
   * 'Error'
   * @member {string} [status] Current status of validation at the database
   * level. Possible values include: 'Default', 'NotStarted', 'Initialized',
   * 'InProgress', 'Completed', 'CompletedWithIssues', 'Stopped', 'Failed'
   */
  constructor() {
  }

  /**
   * Defines the metadata of MigrationValidationDatabaseLevelResult
   *
   * @returns {object} metadata of MigrationValidationDatabaseLevelResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MigrationValidationDatabaseLevelResult',
      type: {
        name: 'Composite',
        className: 'MigrationValidationDatabaseLevelResult',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          migrationId: {
            required: false,
            readOnly: true,
            serializedName: 'migrationId',
            type: {
              name: 'String'
            }
          },
          sourceDatabaseName: {
            required: false,
            readOnly: true,
            serializedName: 'sourceDatabaseName',
            type: {
              name: 'String'
            }
          },
          targetDatabaseName: {
            required: false,
            readOnly: true,
            serializedName: 'targetDatabaseName',
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
          dataIntegrityValidationResult: {
            required: false,
            readOnly: true,
            serializedName: 'dataIntegrityValidationResult',
            type: {
              name: 'Composite',
              className: 'DataIntegrityValidationResult'
            }
          },
          schemaValidationResult: {
            required: false,
            readOnly: true,
            serializedName: 'schemaValidationResult',
            type: {
              name: 'Composite',
              className: 'SchemaComparisonValidationResult'
            }
          },
          queryAnalysisValidationResult: {
            required: false,
            readOnly: true,
            serializedName: 'queryAnalysisValidationResult',
            type: {
              name: 'Composite',
              className: 'QueryAnalysisValidationResult'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MigrationValidationDatabaseLevelResult;