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

.controller('CustomerDetailsCtrl', function($scope, $location, LoginService) {

  $scope.doLogin = function() {
    var isValidLogin = LoginService.validateLogin($scope.username, $scope.password);
    if(isValidLogin) {
      $location.path("/payment-gateway");
    }else {
      $scope.erorrMessage = "Incorrect usrname/password";
    }
  };
})

.service('LoginService', function() {
  this.validateLogin = function(uname, pword) {
    if(uname=="admin" & pword =="admin") {
      return true;
    }else {
      return false;
    }
  }
})

.directive('errordisplay', function() {
  return {
    require: 'ngModel',

    link: function(scope, element, attr, ctrl) {
      ctrl.$validators.errordisplay = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue) || viewValue.length <5) {
          return false;
        };
        return true;
      }
    }
  }
});
