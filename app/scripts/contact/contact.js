function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 53.891256, lng: 18.018361},
    zoom: 14
  });

  var marker = new google.maps.Marker({
    position: {lat: 53.891256, lng: 18.018361},
    map: map,
    title: 'Organmistrzostwo Zdzisław Mollin'
  });
}

define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.contact', [])
    .config(function ($stateProvider) {
      $stateProvider.state('contact', {
        url: '/contact',
        views: {
          "": {
            controller: 'ContactCtrl',
            templateUrl: 'scripts/contact/contact.html'
          }
        },
        data: { pageTitle: 'Kontakt' }
      });
    })
    .controller('ContactCtrl', function() {
      console.log('czesc jestesmy w state nr 1');
    });
});

