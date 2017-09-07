/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import("bower_components/animate.css/animate.min.css");
  app.import("bower_components/wow/dist/wow.min.js");
  app.import("bower_components/ion-sound/js/ion.sound.min.js");

  return app.toTree();
};
