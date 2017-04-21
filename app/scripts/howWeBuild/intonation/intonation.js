
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.intonation', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('howWeBuild.intonation', {
        url: '/how-we-build/intonation',
        views: {
          "": {
            controller: 'HowWeBuildIntonationCtrl',
            templateUrl: 'scripts/howWeBuild/intonation/intonation.html'
          }
        },
        data: { pageTitle: 'HOW_WE_BUILD.INTONATION.TITLE' }
      });
    }])
    .controller('HowWeBuildIntonationCtrl', function() {

    });
});

