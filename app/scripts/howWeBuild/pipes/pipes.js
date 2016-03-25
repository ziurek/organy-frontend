
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.pipes', [])
  .config(function ($stateProvider) {
    $stateProvider.state('howWeBuild.pipes', {
      url: '/how-we-build/pipes',
      views: {
        "": {
          controller: 'HowWeBuildPipesCtrl',
          templateUrl: 'scripts/howWeBuild/pipes/pipes.html'
        }
      },
      data: { pageTitle: 'Jak budujemy | Piszczałki' }
    });
  })
  .controller('HowWeBuildPipesCtrl', function() {

  });
});

