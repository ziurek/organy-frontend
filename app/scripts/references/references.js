
define(['angular'], function(angular) {
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
    .controller('ReferencesCtrl', function() {
      console.log('czesc jestesmy w state nr 1');
    });
});

