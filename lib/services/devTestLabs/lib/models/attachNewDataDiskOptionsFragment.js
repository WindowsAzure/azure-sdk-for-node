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
 * Properties to attach new disk to the Virtual Machine.
 *
 */
class AttachNewDataDiskOptionsFragment {
  /**
   * Create a AttachNewDataDiskOptionsFragment.
   * @property {number} [diskSizeGiB] Size of the disk to be attached in
   * Gibibytes.
   * @property {string} [diskName] The name of the disk to be attached.
   * @property {string} [diskType] The storage type for the disk (i.e.
   * Standard, Premium). Possible values include: 'Standard', 'Premium'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AttachNewDataDiskOptionsFragment
   *
   * @returns {object} metadata of AttachNewDataDiskOptionsFragment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AttachNewDataDiskOptionsFragment',
      type: {
        name: 'Composite',
        className: 'AttachNewDataDiskOptionsFragment',
        modelProperties: {
          diskSizeGiB: {
            required: false,
            serializedName: 'diskSizeGiB',
            type: {
              name: 'Number'
            }
          },
          diskName: {
            required: false,
            serializedName: 'diskName',
            type: {
              name: 'String'
            }
          },
          diskType: {
            required: false,
            serializedName: 'diskType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AttachNewDataDiskOptionsFragment;