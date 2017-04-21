
define(['angular', 'baguetteBox'], function(angular, baguetteBox) {
  'use strict';

  return angular.module('myApp.aboutCompany', [])
    .config(['$stateProvider', function ($stateProvider) {
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
    }])
    .controller('AboutCompanyCtrl', ['$timeout', function($timeout) {
      $timeout(function () {
        baguetteBox.run('.gallery');
      });
    }]);
});

