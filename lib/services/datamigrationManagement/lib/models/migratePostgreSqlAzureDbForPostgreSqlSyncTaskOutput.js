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
 * Output for the task that migrates PostgreSQL databases to Azure Database for
 * PostgreSQL for online migrations
 *
 */
class MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput {
  /**
   * Create a MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput.
   * @member {string} [id] Result identifier
   * @member {string} resultType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput
   *
   * @returns {object} metadata of MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'resultType',
          clientName: 'resultType'
        },
        uberParent: 'MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput',
        className: 'MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput',
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
          }
        }
      }
    };
  }
}

module.exports = MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput;