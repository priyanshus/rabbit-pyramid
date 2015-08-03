'use strict';

angular.module('myApp.customerDetails', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
    .state('customer-details', {
      url: '/customer-details',
      templateUrl: 'customer-details/customer-details.html',
      controller : 'CustomerDetailsCtrl'
    })

    $stateProvider
     .state('login', {
       url: '/payment-gateway',
       templateUrl: 'payment-gateway/payment-gateway.html',
       controller : 'PaymentGatewayCtrl'
    });
})

.controller('CustomerDetailsCtrl', function($scope,$location) {
  $scope.doLogin = function() {
    var username = $scope.username;
    var password = $scope.password;
    if(username == password) {
      $location.path('/payment-gateway');
    }else {
      $location.path('#');
    }
  }
});
