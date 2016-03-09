
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.realisations', [])
    .config(function ($stateProvider) {
      $stateProvider.state('realisations', {
        url: '/realisations',
        views: {
          "": {
            controller: 'RealisationsCtrl',
            templateUrl: 'scripts/realisations/realisations.html'
          }
        },
        data: { pageTitle: 'Realizacje' }
      });
    })
    .controller('RealisationsCtrl', function() {
      console.log('czesc jestesmy w state nr 1');
    });
});

