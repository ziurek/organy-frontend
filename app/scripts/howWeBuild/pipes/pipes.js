
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
      data: { pageTitle: 'HOW_WE_BUILD.PIPES.TITLE' }
    });
  })
  .controller('HowWeBuildPipesCtrl', function() {

  });
});

