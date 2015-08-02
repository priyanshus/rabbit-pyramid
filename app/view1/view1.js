'use strict';

angular.module('myApp.view1', ['ui.router'])

/*
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])*/

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('view1', {
      url: '/view1',
      templateUrl: 'view1/view1.html',
      controller : 'View1Ctrl'
    });
})

.controller('View1Ctrl', [function() {

}]);