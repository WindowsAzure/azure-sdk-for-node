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
 * @summary Represents an OMS workspace to which the solution is connected
  *
 */
class ConnectedWorkspace {
  /**
   * Create a ConnectedWorkspace.
   * @property {string} [id] Azure resource ID of the connected OMS workspace
   */
  constructor() {
  }

  /**
   * Defines the metadata of ConnectedWorkspace
   *
   * @returns {object} metadata of ConnectedWorkspace
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectedWorkspace',
      type: {
        name: 'Composite',
        className: 'ConnectedWorkspace',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectedWorkspace;