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
 * Class representing a MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel.
 * @extends models['MigrateSchemaSqlServerSqlDbTaskOutput']
 */
class MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel extends models['MigrateSchemaSqlServerSqlDbTaskOutput'] {
  /**
   * Create a MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel.
   * @member {string} [databaseName] The name of the database
   * @member {string} [state] State of the schema migration for this database.
   * Possible values include: 'None', 'InProgress', 'Failed', 'Warning',
   * 'Completed', 'Skipped', 'Stopped'
   * @member {string} [stage] Schema migration stage for this database.
   * Possible values include: 'NotStarted', 'ValidatingInputs',
   * 'CollectingObjects', 'DownloadingScript', 'GeneratingScript',
   * 'UploadingScript', 'DeployingSchema', 'Completed',
   * 'CompletedWithWarnings', 'Failed'
   * @member {date} [startedOn] Migration start time
   * @member {date} [endedOn] Migration end time
   * @member {string} [databaseErrorResultPrefix] Prefix string to use for
   * querying errors for this database
   * @member {string} [schemaErrorResultPrefix] Prefix string to use for
   * querying schema errors for this database
   * @member {number} [numberOfSuccessfulOperations] Number of successful
   * operations for this database
   * @member {number} [numberOfFailedOperations] Number of failed operations
   * for this database
   * @member {string} [fileId] Identifier for the file resource containing the
   * schema of this database
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel
   *
   * @returns {object} metadata of MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabaseLevelOutput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'resultType',
          clientName: 'resultType'
        },
        uberParent: 'MigrateSchemaSqlServerSqlDbTaskOutput',
        className: 'MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel',
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
          databaseName: {
            required: false,
            readOnly: true,
            serializedName: 'databaseName',
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
          stage: {
            required: false,
            readOnly: true,
            serializedName: 'stage',
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
          databaseErrorResultPrefix: {
            required: false,
            readOnly: true,
            serializedName: 'databaseErrorResultPrefix',
            type: {
              name: 'String'
            }
          },
          schemaErrorResultPrefix: {
            required: false,
            readOnly: true,
            serializedName: 'schemaErrorResultPrefix',
            type: {
              name: 'String'
            }
          },
          numberOfSuccessfulOperations: {
            required: false,
            readOnly: true,
            serializedName: 'numberOfSuccessfulOperations',
            type: {
              name: 'Number'
            }
          },
          numberOfFailedOperations: {
            required: false,
            readOnly: true,
            serializedName: 'numberOfFailedOperations',
            type: {
              name: 'Number'
            }
          },
          fileId: {
            required: false,
            readOnly: true,
            serializedName: 'fileId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel;