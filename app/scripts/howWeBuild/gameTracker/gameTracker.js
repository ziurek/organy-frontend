
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.gameTracker', [])
  .config(function ($stateProvider) {
    $stateProvider.state('howWeBuild.gameTracker', {
      url: '/how-we-build/game-tracker',
      views: {
        "": {
          controller: 'HowWeBuildGameTrackerCtrl',
          templateUrl: 'scripts/howWeBuild/gameTracker/gameTracker.html'
        }
      },
      data: { pageTitle: 'Jak budujemy | Traktura gry – mechaniczna' }
    });
  })
  .controller('HowWeBuildGameTrackerCtrl', function() {

  });
});

