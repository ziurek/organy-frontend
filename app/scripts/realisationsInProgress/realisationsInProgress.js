
define(['angular', 'jquery', 'lodash'], function(angular, $, _) {
  'use strict';

  return angular.module('myApp.realisationsInProgress', [])
    .config(function ($stateProvider) {
      $stateProvider.state('realisationsInProgress', {
        url: '/realisations/in-progress',
        views: {
          "": {
            controller: 'RealisationsInProgressCtrl',
            templateUrl: 'scripts/realisationsInProgress/realisationsInProgress.html'
          }
        },
        data: { pageTitle: 'Realizacje | W trakcie' }
      });
    })
    .controller('RealisationsInProgressCtrl', function($scope, inProgressRealisations, $state) {
      $scope.realisations = inProgressRealisations;

      $scope.realisationTileClick = function(realisation) {
        $state.go('realisationDetails', {state: 'in-progress', place: encodeURI(realisation.place)});
      };
    });
});

