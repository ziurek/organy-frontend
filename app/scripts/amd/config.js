require.config({
  baseUrl: "../../",
  paths: {
    'jquery': 'bower_components/jquery/dist/jquery',
    'bootstrap': 'bower_components/bootstrap/dist/js/boostrap',
    'angular': 'bower_components/angular/angular',
    'uiRouter': 'bower_components/angular-ui-router/release/angular-ui-router',
    'uiBootstrap': 'bower_components/angular-bootstrap/ui-bootstrap'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'uiRouter': {
      deps: ['angular'],
      exports: 'uiRouter'
    },
    'uiBootstrap': {
      deps: ['angular']
    },
    bootstrap: {
      deps: ['jquery']
    }
  }
});

require(['app'], function (app) {
  angular.bootstrap(document, ['myApp']);
});
