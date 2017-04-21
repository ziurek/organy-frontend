
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.gameTracker', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('howWeBuild.gameTracker', {
        url: '/how-we-build/game-tracker',
        views: {
          "": {
            controller: 'HowWeBuildGameTrackerCtrl',
            templateUrl: 'scripts/howWeBuild/gameTracker/gameTracker.html'
          }
        },
        data: { pageTitle: 'HOW_WE_BUILD.GAME_TRACKER.TITLE' }
      });
    }])
    .controller('HowWeBuildGameTrackerCtrl', function() {

    });
});

