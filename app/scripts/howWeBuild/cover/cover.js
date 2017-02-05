
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.cover', [])
  .config(function ($stateProvider) {
    $stateProvider.state('howWeBuild.cover', {
      url: '/how-we-build/cover',
      views: {
        "": {
          controller: 'HowWeBuildCoverCtrl',
          templateUrl: 'scripts/howWeBuild/cover/cover.html'
        }
      },
      data: { pageTitle: 'HOW_WE_BUILD.COVER.TITLE' }
    });
  })
  .controller('HowWeBuildCoverCtrl', function() {

  });
});

