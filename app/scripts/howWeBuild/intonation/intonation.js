
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.intonation', [])
    .config(function ($stateProvider) {
      $stateProvider.state('howWeBuild.intonation', {
        url: '/how-we-build/intonation',
        views: {
          "": {
            controller: 'HowWeBuildIntonationCtrl',
            templateUrl: 'scripts/howWeBuild/intonation/intonation.html'
          }
        },
        data: { pageTitle: 'Jak budujemy | Intonacja' }
      });
    })
    .controller('HowWeBuildIntonationCtrl', function() {

    });
});
