'use strict';

/**
 * stellar-body service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stellar-body.stellar-body');
