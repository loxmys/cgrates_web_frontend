/*jshint node:true*/
/* global require, module */
let EmberApp = require('ember-cli/lib/broccoli/ember-app');
let nodeSass = require('node-sass'); // loads the version in your package.json

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    'ember-bootstrap': {
      importBootstrapCSS: false,
      blacklist: ['bs-popover', 'bs-accordion'],
      'bootstrapVersion': 4,
      'importBootstrapFont': false
    }
  });



  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
