'use strict';
describe('Mobile List View Module', function() {
  beforeEach(module('myApp.mobile-list'));

  describe('On Mobile List Page', function(){

    it('should have defined controller', inject(function($controller) {
      var $scope = {};
      var MobileListCtrl = $controller('MobileListCtrl', { $scope: $scope });

      expect(MobileListCtrl).toBeDefined();
    }));
  });
});
