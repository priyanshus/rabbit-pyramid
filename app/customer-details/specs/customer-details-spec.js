'use strict';
describe('Customer Login Module', function() {
  var scope, controller, LoginService, location;

  beforeEach(function (){

  module('myApp.customerDetails');

  inject(function($controller, $rootScope, _LoginService_, $location) {
    scope = $rootScope.$new();
    controller = $controller("CustomerDetailsCtrl", {$scope : scope});
    LoginService = _LoginService_;
    location = $location;
    });
  });

  describe('On Customer login Page', function() {
    it('should have defined controller', function() {
      expect(controller).toBeDefined();
    });

    it('should have registered service', function() {
      expect(angular.isFunction(LoginService.validateLogin)).toBe(true);
    });

    it('should allow to login if credentials are valid',function() {
      var isLoggedIn = LoginService.validateLogin('admin','admin');
      expect(isLoggedIn).toBe(true);
    });

    it('should display error message if login credentials are invalid',function() {
      scope.doLogin();
      expect(scope.erorrMessage).toEqual('Incorrect usrname/password');
    });

    it('should not allow to login if credentials are invalid',function() {
      var isLoggedIn = LoginService.validateLogin('admin','wrongpassword');
      expect(isLoggedIn).toBe(false);
    });

    it('should redirect to payment gateway for valid login', function() {
      scope.username = 'admin';
      scope.password = 'admin';
      scope.doLogin();
      scope.$apply();

      expect(location.path()).toEqual('/payment-gateway');
    });

    it('should land user on same login page for invalid login', function() {
      scope.username = 'admin';
      scope.password = 'wrongPasswrod';
      scope.doLogin();
      scope.$apply();

      expect(location.path()).toEqual('');
    });
  });
});
