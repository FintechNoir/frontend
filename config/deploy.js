/* eslint-disable no-undef */
/* jshint node: true */

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'staging';
    ENV['scp'] = {
      username: 'nsuask',
      host: '5.101.119.56',
      path: '/var/www/meeter-greeter/',
      displayCommands: true
    }
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
  }

  return ENV;
};
