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
 * Database specific information for PostgreSQL to Azure Database for
 * PostgreSQL migration task inputs
 *
 */
class MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput {
  /**
   * Create a MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput.
   * @member {string} [name] Name of the database
   * @member {string} [targetDatabaseName] Name of target database. Note:
   * Target database will be truncated before starting migration.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput
   *
   * @returns {object} metadata of MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput',
      type: {
        name: 'Composite',
        className: 'MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          targetDatabaseName: {
            required: false,
            serializedName: 'targetDatabaseName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput;