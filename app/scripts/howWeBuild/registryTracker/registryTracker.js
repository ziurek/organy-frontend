
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.registryTracker', [])
  .config(function ($stateProvider) {
    $stateProvider.state('howWeBuild.registryTracker', {
      url: '/how-we-build/registry-tracker',
      views: {
        "": {
          controller: 'HowWeBuildRegistryTrackerCtrl',
          templateUrl: 'scripts/howWeBuild/registryTracker/registryTracker.html'
        }
      },
      data: { pageTitle: 'Jak budujemy | Traktura registrowa – mechaniczna lub elektryczna' }
    });
  })
  .controller('HowWeBuildRegistryTrackerCtrl', function() {

  });
});

