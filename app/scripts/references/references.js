
define(['angular', 'baguetteBox'], function(angular, baguetteBox) {
  'use strict';

  return angular.module('myApp.references', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('references', {
        url: '/references',
        views: {
          "": {
            controller: 'ReferencesCtrl',
            templateUrl: 'scripts/references/references.html'
          }
        },
        data: { pageTitle: 'REFERENCES.TITLE' }
      });
    }])
    .controller('ReferencesCtrl', ['$timeout', function($timeout) {
      $timeout(function () {
        baguetteBox.run('.gallery');
      });
    }]);
});

