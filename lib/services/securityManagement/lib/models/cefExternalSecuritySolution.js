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
 * Represents a security solution which sends CEF logs to an OMS workspace
 *
 * @extends models['ExternalSecuritySolution']
 */
class CefExternalSecuritySolution extends models['ExternalSecuritySolution'] {
  /**
   * Create a CefExternalSecuritySolution.
   * @property {object} [properties]
   * @property {string} [properties.hostname]
   * @property {string} [properties.agent]
   * @property {string} [properties.lastEventReceived]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CefExternalSecuritySolution
   *
   * @returns {object} metadata of CefExternalSecuritySolution
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CEF',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'ExternalSecuritySolution',
        className: 'CefExternalSecuritySolution',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            readOnly: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'CefSolutionProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = CefExternalSecuritySolution;