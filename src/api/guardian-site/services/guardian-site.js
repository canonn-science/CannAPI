'use strict';

/**
 * guardian-site service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guardian-site.guardian-site');
