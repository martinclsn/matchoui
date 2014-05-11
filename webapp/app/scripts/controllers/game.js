'use strict';

angular.module('matchostatApp')
  .controller('GameCtrl', function ($scope, $ionicModal, $http, config, resourceService, exceptionService) {

    function init() {
      console.log('Init GameCtrl')
      $scope.selectedTeam = 1;
      $scope.teams = {};
      $scope.teams[1] = [];
      $scope.teams[2] = [];
    }

    init();

    $ionicModal.fromTemplateUrl('newGameModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.newGameModal = modal;
    });

    $scope.openNewGameModal = function () {
      console.log('Show new game modal')
      $scope.newGameModal.show();
    };

    $scope.closeNewGameModal = function () {
      init();
      $scope.newGameModal.hide();
    };

    $scope.startGame = function () {
      console.log('Start game');

      var game = {team1: {players: $scope.teams[1]},
                  team2: {players: $scope.teams[2]}}

      $http.post(resourceService.getGamesPath(), game).success(function (data, status, headers, config) {
        $scope.closeNewGameModal();
      }).error(exceptionService.getHttpErrorFunction(exceptionService));

      $scope.newGameModal.hide();
    };


    $ionicModal.fromTemplateUrl('addTeamPlayerModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.addTeamPlayerModal = modal;
    });

    var getAllPlayers = function () {
      $http.get(resourceService.getPlayersPath()).success(function (data, status, headers, config) {
        $scope.players = data;
      }).error(exceptionService.getHttpErrorFunction(exceptionService));
    }

    $scope.addTeamPlayer = function (player) {
      console.log('Add player ' + JSON.stringify(player) + ' to team ' + $scope.selectedTeam)
      $scope.teams[$scope.selectedTeam].push(player);
      $scope.closeAddTeamPlayerModal();
    }


    $scope.openAddTeamPlayerModal = function (team) {
      console.log('addPlayer for Team ' + team);

      getAllPlayers();

      $scope.selectedTeam = team;
      $scope.addTeamPlayerModal.show();
    };

    $scope.closeAddTeamPlayerModal = function () {
      $scope.addTeamPlayerModal.hide();
    };


    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.newGameModal.remove();
    });

  });
