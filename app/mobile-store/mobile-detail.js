'use strict';

angular.module('myApp.mobileDetail', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('mobile-view', {
      absolute: true,
      url: '/mobile-view',
      templateUrl: 'mobile-store/mobile-view.html'
  });

   $stateProvider
    .state('mobile-view.view', {
      url: '/:mobileId',
      templateUrl: 'mobile-store/mobile-detail.html',
      controller : 'MobileDetailCtrl'
    });
})

.controller('MobileDetailCtrl', ['$scope','$http','$stateParams', function($scope,$http,$stateParams) {
    $http.get('http://localhost:3000/mobiles/'+ $stateParams.mobileId)
    .success(function(response) {
      $scope.mobile = response;
    })

    $scope.showOffer = function() {
      $scope.offerText = '5% OFF on Rabbit Cards*';
    }
}])

.directive('hideme', function() {
  return function(scope, element, attrs) {
    restrict: 'A';
    var clickingCallback = function() {
      element.addClass('hide');
    };
    element.bind('click', clickingCallback);
  }
});
