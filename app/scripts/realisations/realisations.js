
define([
  'angular'
], function(angular) {
  'use strict';

  return angular.module('myApp.realisations', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('realisations', {
        url: '/realisations',
        views: {
          "": {
            controller: 'RealisationsCtrl',
            templateUrl: 'scripts/realisations/realisations.html'
          }
        },
        data: { pageTitle: 'REALISATIONS.TITLE' }
      });
    }])
    .controller('RealisationsCtrl', function() {

    });
});

