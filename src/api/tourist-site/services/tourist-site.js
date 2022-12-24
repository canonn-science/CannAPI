'use strict';

/**
 * tourist-site service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tourist-site.tourist-site');
