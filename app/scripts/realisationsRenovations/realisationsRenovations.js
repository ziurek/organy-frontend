
define(['angular', 'jquery', 'lodash', 'baguetteBox'], function(angular, $, _, baguetteBox) {
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
        data: { pageTitle: 'REALISATIONS.RENOVATIONS_TITLE' }
      });
    })
    .controller('RealisationsRenovationsCtrl', function($scope, renovationsRealisations, $state, $timeout) {
      $scope.realisations = renovationsRealisations;
      var imageClicked = false;

      $scope.realisationTileClick = function(realisation) {
        if (!imageClicked) {
          $state.go('realisationDetails', {state: 'renovations', place: encodeURI(realisation.place)});
        }
        imageClicked = false;
      };

      $scope.mainImageClick = function () {
        imageClicked = true;
      };

      $timeout(function () {
        baguetteBox.run('.gallery');
      });
    });
});

