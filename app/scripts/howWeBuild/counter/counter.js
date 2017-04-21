
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.counter', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('howWeBuild.counter', {
        url: '/how-we-build/counter',
        views: {
          "": {
            controller: 'HowWeBuildCounterCtrl',
            templateUrl: 'scripts/howWeBuild/counter/counter.html'
          }
        },
        data: { pageTitle: 'HOW_WE_BUILD.COUNTER.TITLE' }
      });
    }])
    .controller('HowWeBuildCounterCtrl', function() {

    });
});

