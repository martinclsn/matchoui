'use strict';

function ExceptionService($log, $window) {

  this.error = function (message) {
    $log.error(message);
    $window.alert(message);
  };

  this.getHttpErrorFunction = function (thisService) {
    var errorFunction = function (data, status) {
      var message = 'Error ' + data;
      if (status === 0) {
        message = 'Unable to access server';
      }
      thisService.error(message);
    };
    return errorFunction;
  };
}

function ResourceService(config) {

  this.config = config;

  this.getPlayersPath = function () {
    return config.API_PATH + '/players';
  };

  this.getGamesPath = function () {
    return config.API_PATH + '/games';
  };

}

var matchoServices = angular.module('matchostatApp');


matchoServices.factory('exceptionService', function ($log, $window) {
  return new ExceptionService($log, $window);
});

matchoServices.factory('resourceService', ['config', function (config) {
  return new ResourceService(config);
}]);






