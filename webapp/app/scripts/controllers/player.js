'use strict';

angular.module('matchostatApp')
  .controller('PlayerCtrl', function ($scope, $state, $log, $stateParams, $http, config, exceptionService) {

    var playerId = $stateParams.playerId;

    $log.info('View player with id:' + playerId);

    function init() {
      $http.get(getPlayersPath() + '/' + playerId).success(function (data) {
        $scope.player = data;
      }).error(exceptionService.getHttpErrorFunction.call(exceptionService));
    }

    init();

    function getPlayersPath() {
      return config.API_PATH + '/players';
    }

    $scope.removePlayer = function (id) {
      $log.info('remove player '+ id);
      $http.delete(getPlayersPath() + '/' + id).success(
        function () {
          $state.transitionTo('app.players');
        }
      ).error(exceptionService.getHttpErrorFunction.call(exceptionService));

    };

  });
