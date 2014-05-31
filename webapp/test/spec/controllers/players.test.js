'use strict';

describe('Controller: PlayersCtrl', function () {

  // load the controller's module
/*
  beforeEach(function() {
    module('matchostatApp');
    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      http = {
        get : function () {
          return {success: function (dataFunction) {
            dataFunction(['Player1', 'Player2']);
          }};
        }
      };

      PlayersCtrl = $controller('PlayersCtrl', {
        $scope: scope,
        $log: http,
        $http: http,
        exceptionService: http,
        resourceService: http
      });
    });
  });
*/

  var PlayersCtrl,
    scope, http;


/*


  describe('MyCtrl', function () {
    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      PlayersCtrl = $controller('PlayersCtrl', {
        $scope: scope,
        $http: "X",
        config: "X"
      });
    }));
    it('sets the name', function () {
      expect(scope.name).toBe('Superhero');
    });

    it('watches the name and updates the counter', function () {
      expect(scope.counter).toBe(0);
      scope.name = 'Batman';
      scope.$digest();
      expect(scope.counter).toBe(1);
    });
  });
*/


  it('should read players from the server', function () {
    expect(scope.players.length === 2).toBe(true);
  });
});
