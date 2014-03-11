'use strict';

angular.module('matchoApp')
  .controller('PlayersCtrl', function ($scope, $http, config) {

    $scope.players = [];
    init();

    function init() {
      $http.get(getPlayersPath()).success(function (data) {
        $scope.players = data;
        $scope.playerName = '';
      });
    }

    function getPlayersPath() {
      return config.API_PATH + '/players';
    }


    $scope.addPlayer = function () {
      $http.post(getPlayersPath(), {name: $scope.playerName}).success(
        function (data) {
          init()
        });

    }

    $scope.removePlayer = function (id) {
      console.log("remove player "+ id);
      $http.delete(getPlayersPath() + '/' + id).success(
        function (data) {
          init();
        }
      );

    }
  });
