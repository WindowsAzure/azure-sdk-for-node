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
 * Defines a video answer.
 *
 * @extends models['SearchResultsAnswer']
 */
class Videos extends models['SearchResultsAnswer'] {
  /**
   * Create a Videos.
   * @property {array} value A list of video objects that are relevant to the
   * query.
   * @property {number} [nextOffset]
   * @property {array} [queryExpansions]
   * @property {array} [relatedSearches]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Videos
   *
   * @returns {object} metadata of Videos
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Videos',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'Videos',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          followUpQueries: {
            required: false,
            readOnly: true,
            serializedName: 'followUpQueries',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'QueryElementType',
                  type: {
                    name: 'Composite',
                    className: 'Query'
                  }
              }
            }
          },
          queryContext: {
            required: false,
            readOnly: true,
            serializedName: 'queryContext',
            type: {
              name: 'Composite',
              className: 'QueryContext'
            }
          },
          totalEstimatedMatches: {
            required: false,
            readOnly: true,
            serializedName: 'totalEstimatedMatches',
            type: {
              name: 'Number'
            }
          },
          isFamilyFriendly: {
            required: false,
            readOnly: true,
            serializedName: 'isFamilyFriendly',
            type: {
              name: 'Boolean'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VideoObjectElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'VideoObject'
                  }
              }
            }
          },
          nextOffset: {
            required: false,
            readOnly: true,
            serializedName: 'nextOffset',
            type: {
              name: 'Number'
            }
          },
          queryExpansions: {
            required: false,
            readOnly: true,
            serializedName: 'queryExpansions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'QueryElementType',
                  type: {
                    name: 'Composite',
                    className: 'Query'
                  }
              }
            }
          },
          relatedSearches: {
            required: false,
            readOnly: true,
            serializedName: 'relatedSearches',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'QueryElementType',
                  type: {
                    name: 'Composite',
                    className: 'Query'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Videos;