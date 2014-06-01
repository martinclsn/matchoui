'use strict';

describe('Controller: PlayersCtrl', function () {

  var ctrl, http, httpBackend, scope, exceptionService, resourceService;

  beforeEach(function() {
    module('matchostatApp');

    var injectFunction = function ($controller, $rootScope, $http, $httpBackend, $log, $window) {
      scope = $rootScope.$new();
      http = $http;
      httpBackend = $httpBackend;

      exceptionService = new ExceptionService($log, $window);
      resourceService = new ResourceService({API_PATH:'http://localhost'});

      ctrl = $controller('PlayersCtrl', {
        $scope: scope,
        $log: $log,
        $http: http,
        exceptionService: exceptionService,
        resourceService: resourceService
      });
    };
    //injectFunction = function() {};
    inject(injectFunction);
  });


  it('should read players from the server', function () {
    var url = resourceService.getPlayersPath();
    httpBackend.whenGET(url).respond(['Player1', 'Player2']);
    httpBackend.whenGET('views/menu.html').respond('');
    httpBackend.whenGET('views/newGame.html').respond('');

    scope.getPlayers();

    //simulate response
    httpBackend.flush();

    expect(scope.players.length).toBe(2);
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

});
