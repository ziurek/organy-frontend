
define(['angular', 'baguetteBox'], function(angular, baguetteBox) {
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
        data: { pageTitle: 'ABOUT_COMPANY.TITLE' }
      });
    })
    .controller('AboutCompanyCtrl', function($timeout) {
      $timeout(function () {
        baguetteBox.run('.gallery');
      });
    });
});

