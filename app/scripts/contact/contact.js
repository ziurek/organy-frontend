
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.contact', [])
    .config(function ($stateProvider) {
      $stateProvider.state('contact', {
        url: '/contact',
        views: {
          "": {
            controller: 'ContactCtrl',
            templateUrl: 'scripts/contact/contact.html'
          }
        },
        data: { pageTitle: 'Kontakt' }
      });
    })
    .controller('ContactCtrl', function() {
      console.log('czesc jestesmy w state nr 1');
    });
});

