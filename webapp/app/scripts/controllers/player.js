'use strict';

angular.module('matchostatApp')
  .controller('PlayerCtrl', function ($scope, $log, $stateParams, $http, config, exceptionService) {

    var playerId = $stateParams.playerId;

    $log.info('View player with id:' + playerId);

    function init() {
      $http.get(getPlayersPath() + '/' + playerId).success(function (data) {
        $scope.player = data;
      }).error(exceptionService.getHttpErrorFunction(exceptionService));
    }

    init();

    function getPlayersPath() {
      return config.API_PATH + '/players';
    }
  });
