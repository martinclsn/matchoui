'use strict';

angular.module('matchostatApp')
  .controller('PlayersCtrl', function ($scope, $http, config) {

    var errorFunction = function (data, status, headers, config) {
      var message = 'Error ' + data;
      if(status === 0) {
        message = 'Unable to access server';
      }
      alert(message);
    };

    function init() {
      $http.get(getPlayersPath()).success(function (data, status, headers, config) {
        $scope.players = data;
        $scope.playerName = '';
      }).error(errorFunction);
    }

    $scope.clear = function()  {
      $scope.playerName = '';
    }

    $scope.players = [];
    init();

    function getPlayersPath() {
      return config.API_PATH + '/players';
    }


    $scope.addPlayer = function () {
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
