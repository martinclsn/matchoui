'use strict';

angular.module('matchostatApp')
  .controller('PlayersCtrl', function ($scope, $log, $http, config, exceptionService, resourceService) {

    var errorFunction = exceptionService.getHttpErrorFunction(exceptionService);

    function init() {
      $http.get(resourceService.getPlayersPath()).success(function (data) {
        $scope.players = data;
        $scope.playerName = '';
        $scope.showDelete = false;

      }).error(errorFunction);
    }

    $scope.clear = function()  {
      $log.info('Clear!');
      $scope.playerName = '';
    };

    $scope.players = [];
    init();

    function getPlayersPath() {
      return resourceService.getPlayersPath();
      //return config.API_PATH + '/players';
    }


    $scope.addPlayer = function () {
      $log.info('add player: "' + $scope.playerName+'"');
      $http.post(getPlayersPath(), {name: $scope.playerName}).success(
        function () {
          init();
        }).error(errorFunction);
    };

    $scope.removePlayer = function (id) {
      $log.info('remove player '+ id);
      $http.delete(getPlayersPath() + '/' + id).success(
        function () {
          init();
        }
      ).error(errorFunction);

    };
  });
