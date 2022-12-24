'use strict';

/**
 * anomaly-site service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::anomaly-site.anomaly-site');
