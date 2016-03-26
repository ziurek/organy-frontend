
define(['angular', 'jquery', 'lodash', 'baguetteBox'], function(angular, $, _, baguetteBox) {
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
        data: { pageTitle: 'Realizacje nowe' }
      });
    })
    .controller('RealisationsNewCtrl', function($scope, newRealisations, $state, $timeout) {
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
    });
});

