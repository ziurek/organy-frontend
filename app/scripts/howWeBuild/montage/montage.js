
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild.montage', [])
  .config(function ($stateProvider) {
    $stateProvider.state('howWeBuild.montage', {
      url: '/how-we-build/montage',
      views: {
        "": {
          controller: 'HowWeBuildMontageCtrl',
          templateUrl: 'scripts/howWeBuild/montage/montage.html'
        }
      },
      data: { pageTitle: 'Jak budujemy | Montaż' }
    });
  })
  .controller('HowWeBuildMontageCtrl', function() {

  });
});
