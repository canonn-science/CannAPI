'use strict';

/**
 * blacklist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blacklist.blacklist');
