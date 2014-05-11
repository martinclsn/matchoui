'use strict';

angular.module('matchostatApp')
  .controller('PlayersCtrl', function ($scope, $http, config, exceptionService, resourceService) {

    var errorFunction = exceptionService.getHttpErrorFunction(exceptionService);

    function init() {
      $http.get(resourceService.getPlayersPath()).success(function (data, status, headers, config) {
        $scope.players = data;
        $scope.playerName = '';
        $scope.showDelete = false;

      }).error(errorFunction);
    }

    $scope.clear = function()  {
      console.log('Clear!');
      $scope.playerName = '';
    }

    $scope.players = [];
    init();

    function getPlayersPath() {
      return resourceService.getPlayersPath();
      //return config.API_PATH + '/players';
    }


    $scope.addPlayer = function () {
      console.log('add player: "' + $scope.playerName+'"')
      $http.post(getPlayersPath(), {name: $scope.playerName}).success(
        function () {
          init();
        }).error(errorFunction);
    };

    $scope.removePlayer = function (id) {
      console.log('remove player '+ id);
      $http.delete(getPlayersPath() + '/' + id).success(
        function () {
          init();
        }
      ).error(errorFunction);

    };
  });
