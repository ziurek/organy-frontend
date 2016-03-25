
define([
  'angular',
  'uiRouter',
  'uiBootstrap',
  'uiBootstrapTpls',
  'angularAnimate',
  'scripts/mainPage/mainPage',
  'scripts/aboutCompany/aboutCompany',
  'scripts/howWeBuild/howWeBuild',
  'scripts/realisations/realisations',
  'scripts/references/references',
  'scripts/contact/contact',
  'scripts/realisationsNew/realisationsNew',
  'scripts/realisationsRenovations/realisationsRenovations',
  'scripts/realisationsInProgress/realisationsInProgress',
  'scripts/realisationDetails/realisationDetails',
  'scripts/data'
], function(angular) {
  'use strict';

  return angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'myApp.mainPage',
    'myApp.aboutCompany',
    'myApp.howWeBuild',
    'myApp.realisations',
    'myApp.references',
    'myApp.contact',
    'myApp.realisationsNew',
    'myApp.realisationsRenovations',
    'myApp.realisationsInProgress',
    'myApp.newRealisations',
    'myApp.realisationDetails'
  ])
  .config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/main-page');
  }])
  .run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      $state.go('mainPage');
    });
  }])
  .constant('Banners', [
    {
      image: '../images/banner_1.jpg'
    },
    {
      image: '../images/banner_2.jpg'
    },
    {
      image: '../images/banner_3.jpg'
    },
    {
      image: '../images/banner_4.jpg'
    }
  ])
  .controller('AppCtrl', function($scope, $location, Banners) {
    $scope.isOpen = false;

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.dropdownToggle = function() {
      $scope.isOpen = !$scope.isOpen;
    };

    $scope.Banners = Banners;
  });
});

