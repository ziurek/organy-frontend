
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.bellows', [])
    .config(function ($stateProvider) {
      $stateProvider.state('howWeBuild.bellows', {
        url: '/how-we-build/bellows',
        views: {
          "": {
            controller: 'HowWeBuildBellowsCtrl',
            templateUrl: 'scripts/howWeBuild/bellows/bellows.html'
          }
        },
        data: { pageTitle: 'HOW_WE_BUILD.BELLOWS.TITLE' }
      });
    })
    .controller('HowWeBuildBellowsCtrl', function() {

    });
});

