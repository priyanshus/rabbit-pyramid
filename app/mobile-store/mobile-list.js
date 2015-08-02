'use strict';

angular.module('myApp.mobile-list', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('mobile-list', {
      url: '/mobile-list',
      templateUrl: 'mobile-store/mobile-list.html',
      controller : 'MobileListCtrl'
    });
})

.controller('MobileListCtrl', ['$scope','$http', function($scope,$http) {
  $scope.getMobileList = function() {
    $http.get('http://localhost:3000/mobiles')
    .success(function(response) {
      $scope.mobiles = response;
    });
  }
}]);
