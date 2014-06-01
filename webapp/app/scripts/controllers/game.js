'use strict';

angular.module('matchostatApp')
  .controller('GameCtrl', function ($scope, $http, $log, resourceService, exceptionService, $stateParams) {

    function init() {
      var gameId = $stateParams.id;
      $log.info('Init GameCtrl for game ' + gameId);

      $http.get(resourceService.getGamesPath() + '/' + gameId).success(function (data) {
        $scope.game = data;
      }).error(exceptionService.getHttpErrorFunction(exceptionService));


    }

    init();


  });
