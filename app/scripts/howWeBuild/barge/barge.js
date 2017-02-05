
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.barge', [])
    .config(function ($stateProvider) {
      $stateProvider.state('howWeBuild.barge', {
        url: '/how-we-build/barge',
        views: {
          "": {
            controller: 'HowWeBuildBargeCtrl',
            templateUrl: 'scripts/howWeBuild/barge/barge.html'
          }
        },
        data: { pageTitle: 'HOW_WE_BUILD.BARGE.TITLE' }
      });
    })
    .controller('HowWeBuildBargeCtrl', function() {

    });
});

