'use strict';

/**
 * reports-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reports-client.reports-client');
