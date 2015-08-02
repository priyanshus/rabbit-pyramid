'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'myApp.view1',
  'myApp.search',
  'myApp.mobile-list',
  'myApp.mobileDetail',
  'myApp.payment',
  'myApp.suggestions',
  'myApp.version'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/mobile-list');
}]);
