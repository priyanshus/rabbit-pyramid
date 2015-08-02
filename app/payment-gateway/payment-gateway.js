'use strict';

angular.module('myApp.payment', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('payment-gateway', {
      url: '/payment-gateway',
      templateUrl: 'payment-gateway/payment-gateway.html',
      controller : 'PaymentGatewayCtrl'
    });
})

.controller('PaymentGatewayCtrl', ['$scope','$http', function($scope,$http) {
}]);
