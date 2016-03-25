
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.fans', [])
  .config(function ($stateProvider) {
    $stateProvider.state('howWeBuild.fans', {
      url: '/how-we-build/fans',
      views: {
        "": {
          controller: 'HowWeBuildFansCtrl',
          templateUrl: 'scripts/howWeBuild/fans/fans.html'
        }
      },
      data: { pageTitle: 'Jak budujemy | Wentylatory' }
    });
  })
  .controller('HowWeBuildFansCtrl', function() {

  });
});

