'use strict';

angular.module('matchostatApp')
  .controller('NewGameCtrl', function ($scope, $ionicModal, $http, $log, resourceService, exceptionService, $state) {

    function init() {
      $log.info('Init NewGameCtrl');
      $scope.players = [];
      $scope.selectedTeam = 1;
    }

    init();

    $ionicModal.fromTemplateUrl('addTeamPlayersModal.html', {
      scope: $scope,
      animation: 'slide-left-right'
    }).then(function (modal) {
      $scope.addTeamPlayersModal = modal;
    });

    $scope.getPlayersInTeam = function(teamId) {
      var teamPlayers = [];
      for(var playerIndex in $scope.players) {
        var player = $scope.players[playerIndex];
        if(player.team === teamId) {
          teamPlayers.push(player);
        }
      }
      return teamPlayers;
    };

    $scope.openAddTeamPlayersModal = function (team) {
      $scope.selectedTeam = team;

      //save selections before reading data
      var playersTeam = {};
      for(var playerIndex in $scope.players) {
        var player = $scope.players[playerIndex];
        playersTeam[player.id] = player.team;
      }

      $scope.logState('openAddTeamPlayersModal before getAllPlayers');

      $http.get(resourceService.getPlayersPath()).success(function (data) {
        $scope.players = data;

        //apply selections
        for(var playerIndex in $scope.players) {
          var player = $scope.players[playerIndex];
          player.team = 0;
          if(playersTeam[player.id]) {
            player.team = playersTeam[player.id];
            if(player.team === $scope.selectedTeam) {
              player.checked = true;
            }
          }
        }

        $scope.logState('openAddTeamPlayersModal after getAllPlayers');
        $scope.addTeamPlayersModal.show();


      }).error(exceptionService.getHttpErrorFunction(exceptionService));


    };

    $scope.closeAddTeamPlayersModal = function () {
      for(var playerIndex in $scope.players) {
        var player = $scope.players[playerIndex];
        if(player.checked) {
          player.team = $scope.selectedTeam;
        } else if (player.team === $scope.selectedTeam) {
          player.team = 0;
        }
      }

      $scope.logState('closeAddTeamPlayersModal');
      $scope.addTeamPlayersModal.hide();
    };


    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.addTeamPlayersModal.remove();
    });

    $scope.logState = function (message) {
      $log.info('logState: ' + message);
      for (var playerIndex in $scope.players) {
        var player = $scope.players[playerIndex];
        $log.info(JSON.stringify(player));
      }
    };

    $scope.getSelectedTeamLabel = function () {
      if ($scope.selectedTeam === 1) {
        return 'Blue';
      }
      return 'Red';

    };

    $scope.goToGameWithUrl = function (url) {
      $http.get(url).success(function (data) {
        var gameId = data.id;
        $log.info('Go to game ' + gameId);
        $state.go('app.game', {id: gameId});
      }).error(exceptionService.getHttpErrorFunction(exceptionService));
    };

    $scope.startGame = function () {
      $log.info('Start game');

      var teams = {};
      for(var i in [1,2]) {
        var teamId = [1,2][i];
        teams[teamId] = [];
        for(var playerIndex in $scope.players) {
          var player = $scope.players[playerIndex];
          if(player.team === teamId) {
            teams[teamId].push({id: player.id});
          }
        }
      }

      var game = {team1: {players: teams[1]},
        team2: {players: teams[2]}};

      $http.post(resourceService.getGamesPath(), game).success(function (data, status, headers) {
        var location = headers('Location');
        $log.info('Game created at ' + location);
        $scope.goToGameWithUrl(location);
      }).error(exceptionService.getHttpErrorFunction(exceptionService));

    };


  }
);


