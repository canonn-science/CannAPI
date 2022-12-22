'use strict';

/**
 * thargoid-site service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::thargoid-site.thargoid-site');
