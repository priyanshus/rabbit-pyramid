'use strict';
describe('Mobile Detailed View Module', function() {

  beforeEach(module('myApp.mobileDetail'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('On Mobile Detailed View Page', function(){

    it('should have defined controller', inject(function() {
      var $scope = {};
      var $http = {};
      var controller = $controller('MobileDetailCtrl', { $scope: $scope });
      expect(controller).toBeDefined();
    }));

    it('should display correct offer text when user clicks on "offer available" button', function() {
      var $scope = {};
      var controller = $controller('MobileDetailCtrl', { $scope: $scope });

      $scope.showOffer();
      expect($scope.offerText).toEqual('5% OFF on Rabbit Cards*');
    })
  });
});

describe('On Mobile Detailed View Page', function() {
  var $compile,
      $rootScope,
      $timeout;

  // Load the myApp module, which contains the directive
  beforeEach(module('myApp.mobileDetail'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_, _$timeout_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
  }));

  it('should hide "Offer Available" button when user clicks on it', function() {
    var element = angular.element(
      '<div>'+
        '<a ng-click="showOffer()" hideme>Click</a>'+
      '</div>'
    )

    element = $compile(element)($rootScope);
    $rootScope.$digest();
    var button = element.find('a');
    button.triggerHandler('click');

    expect(button).toHaveClass("hide");
  });

  it('should display pin availability text when user checks for correct pin', function() {
    var directive,scope;
    scope = $rootScope;
    var element = angular.element(
    '<form name="form">'+
      '<input name="pininput" type="text" ng-model="pincode" checkpincode></input>'+
      '<p id="errTxt" ng-show="form.pininput.$error.checkpincode">Available</p>'+
    '</form>'
    );
    element = $compile(element)(scope);

    $rootScope.$digest();
    var inputBox = element.find('input');
    angular.element(inputBox).val('123').trigger('input');
    scope.$apply();
    expect(inputBox).toHaveClass("ng-invalid-checkpincode");

    expect(element.find("#errTxt")).not.toHaveClass('ng-hide');

  });

  it('should not display pin availability text when user checks for incorrect pin', function() {
    var directive,scope;
    scope = $rootScope;
    var element = angular.element(
      '<form>'+
        '<input name="pininput" type="text" ng-model="pincode" checkpincode></input>'+
        '<p id="errTxt" ng-show="form.pininput.$error.checkpincode">Available</p>'+
      '</form>'
    );
    element = $compile(element)(scope);

    $rootScope.$digest();

    var inputBox = element.find('input');
    angular.element(inputBox).val('123009').trigger('input');
    scope.$apply();

    expect(inputBox).toHaveClass("ng-valid-checkpincode");
    expect(element.find("#errTxt")).toHaveClass('ng-hide');
    expect(element.find("#errTxt")).not.toBeVisible();
  })
});
