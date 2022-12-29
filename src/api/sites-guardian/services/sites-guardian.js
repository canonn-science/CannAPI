'use strict';

/**
 * sites-guardian service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sites-guardian.sites-guardian');
