
define(['angular', 'jquery', 'lodash', 'baguetteBox'], function(angular, $, _, baguetteBox) {
  'use strict';

  return angular.module('myApp.realisationsNew', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('realisationsNew', {
        url: '/realisations/new',
        views: {
          "": {
            controller: 'RealisationsNewCtrl',
            templateUrl: 'scripts/realisationsNew/realisationsNew.html'
          }
        },
        data: { pageTitle: 'REALISATIONS.NEW_TITLE' }
      });
    }])
    .controller('RealisationsNewCtrl',
    ['$scope', 'newRealisations', '$state', '$timeout', function($scope, newRealisations, $state, $timeout) {
      $scope.realisations = newRealisations;
      var imageClicked = false;

      $scope.realisationTileClick = function(realisation) {
        if(!imageClicked) {
          $state.go('realisationDetails', {state: 'new', place: encodeURI(realisation.place)});
        }
        imageClicked = false;
      };

      $scope.mainImageClick = function() {
        imageClicked = true;
      };

      $timeout(function () {
        baguetteBox.run('.gallery');
      });
    }]);
});

