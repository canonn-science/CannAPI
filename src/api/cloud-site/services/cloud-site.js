'use strict';

/**
 * cloud-site service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cloud-site.cloud-site');
