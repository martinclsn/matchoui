'use strict';

angular.module('matchostatApp')
  .controller('GameCtrl', function ($scope, $ionicModal, $http, $log, config, resourceService, exceptionService) {

    function init() {
      $log.info('Init GameCtrl');

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
      $log.info('Show new game modal');
      $scope.newGameModal.show();
    };

    $scope.closeNewGameModal = function () {
      init();
      $scope.newGameModal.hide();
    };

    $scope.startGame = function () {
      $log.info('Start game');

      var game = {team1: {players: $scope.teams[1]},
                  team2: {players: $scope.teams[2]}};

      $http.post(resourceService.getGamesPath(), game).success(function () {
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
      $http.get(resourceService.getPlayersPath()).success(function (data) {
        $scope.players = data;
      }).error(exceptionService.getHttpErrorFunction(exceptionService));
    };

    $scope.addTeamPlayer = function (player) {
      $log.info('Add player ' + JSON.stringify(player) + ' to team ' + $scope.selectedTeam);

      $scope.teams[$scope.selectedTeam].push(player);
      $scope.closeAddTeamPlayerModal();
    };


    $scope.openAddTeamPlayerModal = function (team) {
      $log.info('addPlayer for Team ' + team);

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
