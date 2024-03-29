Package.describe({
  name: 'samcorcos:cordova-camera',
  version: '0.0.1',
  summary: 'Making it easy to integrate Cordova to take pictures in a way that does not depend on Blaze',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('cordova-camera.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('samcorcos:cordova-camera');
  api.addFiles('cordova-camera-tests.js');
});
