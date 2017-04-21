
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.registryTracker', [])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('howWeBuild.registryTracker', {
      url: '/how-we-build/registry-tracker',
      views: {
        "": {
          controller: 'HowWeBuildRegistryTrackerCtrl',
          templateUrl: 'scripts/howWeBuild/registryTracker/registryTracker.html'
        }
      },
      data: { pageTitle: 'HOW_WE_BUILD.REGISTRY_TRACKER.TITLE' }
    });
  }])
  .controller('HowWeBuildRegistryTrackerCtrl', function() {

  });
});

