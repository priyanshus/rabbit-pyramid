'use strict';
describe('myApp.mobile-list module', function() {
  beforeEach(module('myApp.mobile-list'));
  describe('MobileListCtrl controller', function(){
    it('should be defined', inject(function($controller) {
      var $scope = {};
      var $http = {};
      var MobileListCtrl = $controller('MobileListCtrl', { $scope: $scope }, {$http: $http});
        expect(MobileListCtrl).toBeDefined();
    }));
  });
});
