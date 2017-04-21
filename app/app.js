
define([
  'angular',
  './translations',
  'uiRouter',
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
    'myApp.translations',
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
  .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function() {
        $rootScope.$state = $state
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
  .constant('LastRealisations', [
    {
      image: '../images/realisations/chojnice_2013/chojnice_prospekt.jpg',
      title: 'Chojnice, kościół Zwiastowania NMP',
      state: 'new'
    },
    {
      image: '../images/realisations/luxemburg_2016/1.jpg',
      title: 'PERLE / Luxemburg - kościół',
      state: 'in-progress'
    },
    {
      image: '../images/realisations/szczecinek_2014/prospekt.jpg',
      title: 'Szczecinek, pw.Narodzenia NMP',
      state: 'renovations'
    }
  ])
  .controller('AppCtrl', ['$scope', '$location', 'Banners', '$translate', '$state',
  function($scope, $location, Banners, $translate, $state)
  {
    $('#hide-before-load').css('display', 'inline');
    $scope.isOpen = false;

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.dropdownToggle = function() {
      $scope.isOpen = !$scope.isOpen;
    };

    $scope.changeLanguage = function (key) {
      $translate.use(key);
      $state.reload();
    };

    $scope.getLanguage = function () {
      return $translate.use();
    };

    $scope.Banners = Banners;
  }]);
});

