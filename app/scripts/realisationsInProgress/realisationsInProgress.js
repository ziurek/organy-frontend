
define(['angular', 'jquery', 'lodash', 'baguetteBox'], function(angular, $, _, baguetteBox) {
  'use strict';

  return angular.module('myApp.realisationsInProgress', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('realisationsInProgress', {
        url: '/realisations/in-progress',
        views: {
          "": {
            controller: 'RealisationsInProgressCtrl',
            templateUrl: 'scripts/realisationsInProgress/realisationsInProgress.html'
          }
        },
        data: {pageTitle: 'REALISATIONS.REALISATIONS_IN_PROGRESS'}
      });
    }])
    .controller('RealisationsInProgressCtrl',
    ['$scope', 'inProgressRealisations', '$state', '$timeout', function ($scope, inProgressRealisations, $state, $timeout) {
      $scope.realisations = inProgressRealisations;
      var imageClicked = false;

      $scope.realisationTileClick = function (realisation) {
        if (!imageClicked) {
          $state.go('realisationDetails', {state: 'in-progress', place: encodeURI(realisation.place)});
        }
        imageClicked = false;
      };

      $scope.mainImageClick = function () {
        imageClicked = true;
      };

      $timeout(function () {
        baguetteBox.run('.gallery');
      });
    }]);
});

