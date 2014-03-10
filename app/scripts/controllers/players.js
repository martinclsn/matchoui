'use strict';

angular.module('matchoApp')
  .controller('PlayersCtrl', function ($scope, $http) {
    $scope.players = [{id:1, name:"number 1"},{id:2,name:"number 2"}];
    $http.get('http://localhost:8080/matchostat/rest/players/').success(function(data) {
      $scope.players = data;
    });

    $scope.addPlayer = function () {


        $scope.players.push({
        id: Math.floor((Math.random()*10000)+100),
        name: $scope.playerName
      });
      $scope.playerName = '';
    }

    $scope.removePlayer = function (id) {
      console.log("remove player "+ id);

      $scope.players=[];
      $scope.playerName = '';
    }
  });
