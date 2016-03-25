
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.barge', [])
    .config(function ($stateProvider) {
      $stateProvider.state('howWeBuild.barge', {
        url: '/how-we-build/barge',
        views: {
          "": {
            controller: 'HowWeBuildBargeCtrl',
            templateUrl: 'scripts/howWeBuild/barge/barge.html'
          }
        },
        data: { pageTitle: 'Jak budujemy | Wiatrownice' }
      });
    })
    .controller('HowWeBuildBargeCtrl', function() {

    });
});

