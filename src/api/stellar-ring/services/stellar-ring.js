'use strict';

/**
 * stellar-ring service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stellar-ring.stellar-ring');
