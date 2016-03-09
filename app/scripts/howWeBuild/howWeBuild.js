
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild', [])
    .config(function ($stateProvider) {
      $stateProvider.state('howWeBuild', {
        url: '/how-we-build',
        views: {
          "": {
            controller: 'HowWeBuildCtrl',
            templateUrl: 'scripts/howWeBuild/howWeBuild.html'
          }
        },
        data: { pageTitle: 'Jak budujemy' }
      });
    })
    .controller('HowWeBuildCtrl', function() {
      console.log('czesc jestesmy w state nr 1');
    });
});

