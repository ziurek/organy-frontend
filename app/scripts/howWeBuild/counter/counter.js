
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.counter', [])
    .config(function ($stateProvider) {
      $stateProvider.state('howWeBuild.counter', {
        url: '/how-we-build/counter',
        views: {
          "": {
            controller: 'HowWeBuildCounterCtrl',
            templateUrl: 'scripts/howWeBuild/counter/counter.html'
          }
        },
        data: { pageTitle: 'Jak budujemy | Kontuar - stół gry' }
      });
    })
    .controller('HowWeBuildCounterCtrl', function() {

    });
});

