'use strict';

angular.module('matchoApp')
  .controller('PlayersCtrl', function ($scope, $http, config) {

    function init() {
      $http.get(getPlayersPath()).success(function (data) {
        $scope.players = data;
        $scope.playerName = '';
      });
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
        });
    };

    $scope.removePlayer = function (id) {
      console.log('remove player '+ id);
      $http.delete(getPlayersPath() + '/' + id).success(
        function () {
          init();
        }
      );

    };
  });
