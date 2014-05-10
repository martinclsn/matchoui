'use strict';

angular.module('matchostatApp')
  .controller('PlayerCtrl', function ($scope, $stateParams, $http, config, exceptionService) {

    var playerId = $stateParams.playerId;

    console.log('View player with id:' + playerId);

    function init() {
      $http.get(getPlayersPath() + '/' + playerId).success(function (data, status, headers, config) {
        $scope.player = data;
      }).error(exceptionService.getHttpErrorFunction(exceptionService));
    }

    init();

    function getPlayersPath() {
      return config.API_PATH + '/players';
    }
  });
