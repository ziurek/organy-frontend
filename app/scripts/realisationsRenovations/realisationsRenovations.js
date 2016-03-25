
define(['angular', 'jquery', 'lodash'], function(angular, $, _) {
  'use strict';

  return angular.module('myApp.realisationsRenovations', [])
    .config(function ($stateProvider) {
      $stateProvider.state('realisationsRenovations', {
        url: '/realisations/renovations',
        views: {
          "": {
            controller: 'RealisationsRenovationsCtrl',
            templateUrl: 'scripts/realisationsRenovations/realisationsRenovations.html'
          }
        },
        data: { pageTitle: 'Realizacje | Renowacje' }
      });
    })
    .controller('RealisationsRenovationsCtrl', function($scope, renovationsRealisations, $state) {
      $scope.realisations = renovationsRealisations;

      $scope.realisationTileClick = function(realisation) {
        $state.go('realisationDetails', {state: 'renovations', place: encodeURI(realisation.place)});
      };
    });
});

