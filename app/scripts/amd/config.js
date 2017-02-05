require.config({
  baseUrl: "../../",
  paths: {
    'jquery': 'bower_components/jquery/dist/jquery',
    'bootstrap': 'bower_components/bootstrap/dist/js/boostrap',
    'angular': 'bower_components/angular/angular',
    'uiRouter': 'bower_components/angular-ui-router/release/angular-ui-router',
    'uiBootstrap': 'bower_components/angular-bootstrap/ui-bootstrap',
    'uiBootstrapTpls': 'bower_components/angular-bootstrap/ui-bootstrap-tpls',
    'angularAnimate': 'bower_components/angular-animate/angular-animate',
    'angularTranslate': 'bower_components/angular-translate/angular-translate.min',
    'lodash': 'bower_components/lodash/dist/lodash',
    'baguetteBox': 'bower_components/baguettebox.js/dist/baguetteBox.min'
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
    'uiBootstrapTpls': {
      deps: ['angular']
    },
    'angularAnimate': {
      deps: ['angular']
    },
    'angularTranslate': {
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
