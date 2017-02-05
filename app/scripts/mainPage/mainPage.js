
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.mainPage', [])
    .config(function ($stateProvider) {
      $stateProvider.state('mainPage', {
        url: '/main-page',
        views: {
          "": {
            controller: 'MainPageCtrl',
            templateUrl: 'scripts/mainPage/mainPage.html'
          }
        },
        data: { pageTitle: 'MAIN_PAGE.PAGE_TITLE' }
      });
    })
    .controller('MainPageCtrl', function($scope, $state, LastRealisations) {
      $scope.LastRealisations = LastRealisations;

      $scope.realisationTileClick = function (realisation) {
        $state.go('realisationDetails', {state: realisation.state, place: encodeURI(realisation.title)});
      };
    });
});

