'use strict';

/**
 * sites-cloud service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sites-cloud.sites-cloud');
