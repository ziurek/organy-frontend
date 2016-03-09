
define([
  'angular',
  'uiRouter',
  'uiBootstrap',
  'scripts/mainPage/mainPage',
  'scripts/aboutCompany/aboutCompany',
  'scripts/howWeBuild/howWeBuild',
  'scripts/realisations/realisations',
  'scripts/references/references',
  'scripts/contact/contact'
], function(angular) {
  'use strict';

  return angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'myApp.mainPage',
    'myApp.aboutCompany',
    'myApp.howWeBuild',
    'myApp.realisations',
    'myApp.references',
    'myApp.contact'
  ])
  .config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }])
  .run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      $state.go('mainPage');
    });
  }])
  .controller('AppCtrl', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
});

