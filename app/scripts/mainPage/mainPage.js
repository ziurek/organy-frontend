
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
        data: { pageTitle: 'Strona główna' }
      });
    })
    .controller('MainPageCtrl', function() {
      console.log('czesc jestesmy w state nr 1');
    });
});

