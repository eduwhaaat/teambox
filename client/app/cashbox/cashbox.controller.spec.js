'use strict';

describe('Controller: CashboxCtrl', function () {

  // load the controller's module
  beforeEach(module('teamboxApp'));

  var CashboxCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CashboxCtrl = $controller('CashboxCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
