'use strict';

module.exports = function(environment, appConfig) {
  if (environment === 'test') {
    appConfig.fastboot = appConfig.fastboot || {};
    appConfig.fastboot.hostWhitelist = appConfig.fastboot.hostWhitelist || [];

    appConfig.fastboot.hostWhitelist.push('ember-cli-fastboot-testing.localhost');
  }

  return { };
};
