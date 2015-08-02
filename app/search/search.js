'use strict';

angular.module('myApp.search', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('search', {
      url: '/search',
      templateUrl: 'search/search.html',
      controller : 'SearchCtrl'
    });
})

/*
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])
*/

.controller('SearchCtrl', ['$scope','$http', function($scope,$http) {
  $scope.friends = [{name:'John', phone:'555-1276'},
                         {name:'Mary', phone:'800-BIG-MARY'},
                         {name:'Mike', phone:'555-4321'},
                         {name:'Adam', phone:'555-5678'},
                         {name:'Julie', phone:'555-8765'},
                         {name:'Juliette', phone:'555-5678'}];

  $scope.loadData = function() {
      $http.get("http://www.omdbapi.com/?t=Sherlock+Holmes&y=&plot=short&r=json")
        .success(function(response) {
          console.log(response);
          $scope.searchResults = response;
        });
    }

}]);
