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
 * Process Thread Information.
 *
 * @extends models['ProxyOnlyResource']
 */
class ProcessThreadInfo extends models['ProxyOnlyResource'] {
  /**
   * Create a ProcessThreadInfo.
   * @member {number} [processThreadInfoId] ARM Identifier for deployment.
   * @member {string} [href] HRef URI.
   * @member {string} [process] Process URI.
   * @member {string} [startAddress] Start address.
   * @member {number} [currentPriority] Current thread priority.
   * @member {string} [priorityLevel] Thread priority level.
   * @member {number} [basePriority] Base priority.
   * @member {date} [startTime] Start time.
   * @member {string} [totalProcessorTime] Total processor time.
   * @member {string} [userProcessorTime] User processor time.
   * @member {string} [priviledgedProcessorTime] Priviledged processor time.
   * @member {string} [state] Thread state.
   * @member {string} [waitReason] Wait reason.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProcessThreadInfo
   *
   * @returns {object} metadata of ProcessThreadInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProcessThreadInfo',
      type: {
        name: 'Composite',
        className: 'ProcessThreadInfo',
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
          kind: {
            required: false,
            serializedName: 'kind',
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
          processThreadInfoId: {
            required: false,
            serializedName: 'properties.id',
            type: {
              name: 'Number'
            }
          },
          href: {
            required: false,
            serializedName: 'properties.href',
            type: {
              name: 'String'
            }
          },
          process: {
            required: false,
            serializedName: 'properties.process',
            type: {
              name: 'String'
            }
          },
          startAddress: {
            required: false,
            serializedName: 'properties.startAddress',
            type: {
              name: 'String'
            }
          },
          currentPriority: {
            required: false,
            serializedName: 'properties.currentPriority',
            type: {
              name: 'Number'
            }
          },
          priorityLevel: {
            required: false,
            serializedName: 'properties.priorityLevel',
            type: {
              name: 'String'
            }
          },
          basePriority: {
            required: false,
            serializedName: 'properties.basePriority',
            type: {
              name: 'Number'
            }
          },
          startTime: {
            required: false,
            serializedName: 'properties.startTime',
            type: {
              name: 'DateTime'
            }
          },
          totalProcessorTime: {
            required: false,
            serializedName: 'properties.totalProcessorTime',
            type: {
              name: 'String'
            }
          },
          userProcessorTime: {
            required: false,
            serializedName: 'properties.userProcessorTime',
            type: {
              name: 'String'
            }
          },
          priviledgedProcessorTime: {
            required: false,
            serializedName: 'properties.priviledgedProcessorTime',
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            serializedName: 'properties.state',
            type: {
              name: 'String'
            }
          },
          waitReason: {
            required: false,
            serializedName: 'properties.waitReason',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProcessThreadInfo;