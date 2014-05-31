'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(function () {
    module('testApp');
    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      testAppCtrl = $controller('testAppCtrl', {
        $scope: scope
      });
    })
  });

  var testAppCtrl, scope;

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.threeLetters.length).toBe(3);
  });
});
