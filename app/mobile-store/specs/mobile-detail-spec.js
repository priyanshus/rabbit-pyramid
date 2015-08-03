'use strict';
describe('myApp.mobile-mobileDetail module', function() {

  beforeEach(module('myApp.mobileDetail'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('MobileDetailCtrl controller', function(){
    it('should be defined', inject(function() {
      var $scope = {};
      var $http = {};
      var controller = $controller('MobileDetailCtrl', { $scope: $scope });
      expect(controller).toBeDefined();
    }));

    it('should have offer text', function() {
      var $scope = {};
      var controller = $controller('MobileDetailCtrl', { $scope: $scope });

      $scope.showOffer();
      expect($scope.offerText).toEqual('5% OFF on Rabbit Cards*');
    })
  });
});

describe('myApp.mobile-mobileDetail module', function() {
  var $compile,
      $rootScope;

  // Load the myApp module, which contains the directive
  beforeEach(module('myApp.mobileDetail'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('click on "offer available" button hides itself and shows offer text', function() {
    var element = angular.element(
      '<div>'+
        '<a ng-click="showOffer()" hideme>Click</a>'+
      '</div>'
    )

    element = $compile(element)($rootScope);
    $rootScope.$digest();
    var button = element.find('a');
    button.click();
    expect(button).toHaveClass("hide");
  });
});
