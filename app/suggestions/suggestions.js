'use strict';

angular.module('myApp.suggestions', ['ui.router'])

.controller('SuggestionsListCtrl', ['$scope','$http', function($scope,$http) {
  $scope.text = "Suggestions For You";

  $scope.getMobileList = function() {
    $http.get('http://localhost:3000/mobiles')
    .success(function(response) {
      $scope.mobiles = response;
    });
  }
}]);
