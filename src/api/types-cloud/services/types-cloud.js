'use strict';

/**
 * types-cloud service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::types-cloud.types-cloud');
