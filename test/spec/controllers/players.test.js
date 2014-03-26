'use strict';

describe('Controller: PlayersCtrl', function () {

  // load the controller's module
  beforeEach(module('matchoApp'));

  var PlayersCtrl,
    scope, http, conf;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    http = {
      get : function () {
        return {success: function (dataFunction) {
          dataFunction(['Player1', 'Player2']);
        }};
      }
    };
    conf = {API_PATH: 'rest'};

    PlayersCtrl = $controller('PlayersCtrl', {
      $scope: scope,
      $http: http,
      config: conf
    });
  }));

  it('should read players from the server', function () {
    expect(scope.players.length === 2).toBe(true);
  });
});
