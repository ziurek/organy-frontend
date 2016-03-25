
define(['angular', 'baguetteBox'], function(angular, baguetteBox) {
  'use strict';

  return angular.module('myApp.references', [])
    .config(function ($stateProvider) {
      $stateProvider.state('references', {
        url: '/references',
        views: {
          "": {
            controller: 'ReferencesCtrl',
            templateUrl: 'scripts/references/references.html'
          }
        },
        data: { pageTitle: 'Referencje' }
      });
    })
    .controller('ReferencesCtrl', function($timeout) {
      $timeout(function () {
        baguetteBox.run('.gallery');
      });
    });
});

