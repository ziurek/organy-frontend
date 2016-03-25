
define(['angular', 'lodash', 'baguetteBox'], function(angular, _, baguetteBox) {
  'use strict';

  return angular.module('myApp.realisationDetails', [])
    .config(function ($stateProvider) {
      $stateProvider.state('realisationDetails', {
        url: '/realisations/:state/:place',
        views: {
          "": {
            controller: 'RealisationDetailsCtrl',
            templateUrl: 'scripts/realisationDetails/realisationDetails.html'
          }
        },
        data: { pageTitle: 'Realizacja' }
      });
    })
    .controller('RealisationDetailsCtrl', function($scope, $stateParams, newRealisations,
                                                   renovationsRealisations, inProgressRealisations, $timeout) {
      var place = decodeURI($stateParams.place);

      $timeout(function () {
        baguetteBox.run('.gallery');
      });

      switch($stateParams.state) {
        case 'new':
          $scope.realisation = _.find(newRealisations, {place: place});
          break;
        case 'in-progress':
          $scope.realisation = _.find(inProgressRealisations, {place: place});
          break;
        case 'renovations':
          $scope.realisation = _.find(renovationsRealisations, {place: place});
          break;
        default:
          throw new Error('State don\'t exist!');
          break;
      };
    });
});

