
define([
  'angular',
  'scripts/howWeBuild/cover/cover',
  'scripts/howWeBuild/counter/counter',
  'scripts/howWeBuild/gameTracker/gameTracker',
  'scripts/howWeBuild/registryTracker/registryTracker',
  'scripts/howWeBuild/barge/barge',
  'scripts/howWeBuild/bellows/bellows',
  'scripts/howWeBuild/fans/fans',
  'scripts/howWeBuild/pipes/pipes',
  'scripts/howWeBuild/intonation/intonation',
  'scripts/howWeBuild/montage/montage'
], function(angular) {
  'use strict';

  return angular.module('myApp.howWeBuild', [
    'myApp.howWeBuild.cover',
    'myApp.howWeBuild.counter',
    'myApp.howWeBuild.gameTracker',
    'myApp.howWeBuild.registryTracker',
    'myApp.howWeBuild.barge',
    'myApp.howWeBuild.bellows',
    'myApp.howWeBuild.fans',
    'myApp.howWeBuild.pipes',
    'myApp.howWeBuild.intonation',
    'myApp.howWeBuild.montage'
  ])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('howWeBuild', {
      views: {
        "": {
          templateUrl: 'scripts/howWeBuild/howWeBuild.html'
        }
      },
      data: { pageTitle: 'HOW_WE_BUILD.TITLE' }
    });
  }]);
});

