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
 * Defines a webpage's metadata.
 *
 */
class WebMetaTag {
  /**
   * Create a WebMetaTag.
   * @property {string} [name] The metadata.
   * @property {string} [content] The name of the metadata.
   */
  constructor() {
  }

  /**
   * Defines the metadata of WebMetaTag
   *
   * @returns {object} metadata of WebMetaTag
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Web/MetaTag',
      type: {
        name: 'Composite',
        className: 'WebMetaTag',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          content: {
            required: false,
            readOnly: true,
            serializedName: 'content',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WebMetaTag;