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
 * The List Gallery Image version operation response.
 */
class GalleryImageVersionList extends Array {
  /**
   * Create a GalleryImageVersionList.
   * @member {string} [nextLink] The uri to fetch the next page of gallery
   * Image Versions. Call ListNext() with this to fetch the next page of
   * gallery Image Versions.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of GalleryImageVersionList
   *
   * @returns {object} metadata of GalleryImageVersionList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GalleryImageVersionList',
      type: {
        name: 'Composite',
        className: 'GalleryImageVersionList',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GalleryImageVersionElementType',
                  type: {
                    name: 'Composite',
                    className: 'GalleryImageVersion'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GalleryImageVersionList;