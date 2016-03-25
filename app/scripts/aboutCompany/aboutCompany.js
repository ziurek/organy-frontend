
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.aboutCompany', [])
    .config(function ($stateProvider) {
      $stateProvider.state('aboutCompany', {
        url: '/about-company',
        views: {
          "": {
            controller: 'AboutCompanyCtrl',
            templateUrl: 'scripts/aboutCompany/aboutCompany.html'
          }
        },
        data: { pageTitle: 'O firmie' }
      });
    })
    .controller('AboutCompanyCtrl', function() {
      
    });
});

