'use strict';

/**
 * stellar-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stellar-system.stellar-system');
