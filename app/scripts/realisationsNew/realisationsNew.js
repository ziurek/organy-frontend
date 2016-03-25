
define(['angular', 'jquery', 'lodash'], function(angular, $, _) {
  'use strict';

  return angular.module('myApp.realisationsNew', [])
    .config(function ($stateProvider) {
      $stateProvider.state('realisationsNew', {
        url: '/realisations/new',
        views: {
          "": {
            controller: 'RealisationsNewCtrl',
            templateUrl: 'scripts/realisationsNew/realisationsNew.html'
          }
        },
        data: { pageTitle: 'Realizacje | Nowe' }
      });
    })
    .controller('RealisationsNewCtrl', function($scope, newRealisations, $state) {
      $scope.realisations = newRealisations;

      $scope.realisationTileClick = function(realisation) {
        $state.go('realisationDetails', {state: 'new', place: encodeURI(realisation.place)});
      };
    });
});

