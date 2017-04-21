
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.fans', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('howWeBuild.fans', {
        url: '/how-we-build/fans',
        views: {
          "": {
            controller: 'HowWeBuildFansCtrl',
            templateUrl: 'scripts/howWeBuild/fans/fans.html'
          }
        },
        data: { pageTitle: 'HOW_WE_BUILD.FANS.TITLE' }
      });
    }])
    .controller('HowWeBuildFansCtrl', function() {

    });
});

