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
 * Request body for face to face verification.
 *
 */
class VerifyFaceToFaceRequest {
  /**
   * Create a VerifyFaceToFaceRequest.
   * @member {uuid} faceId1 FaceId of the first face, comes from Face - Detect
   * @member {uuid} faceId2 FaceId of the second face, comes from Face - Detect
   */
  constructor() {
  }

  /**
   * Defines the metadata of VerifyFaceToFaceRequest
   *
   * @returns {object} metadata of VerifyFaceToFaceRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VerifyFaceToFaceRequest',
      type: {
        name: 'Composite',
        className: 'VerifyFaceToFaceRequest',
        modelProperties: {
          faceId1: {
            required: true,
            serializedName: 'faceId1',
            type: {
              name: 'String'
            }
          },
          faceId2: {
            required: true,
            serializedName: 'faceId2',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VerifyFaceToFaceRequest;