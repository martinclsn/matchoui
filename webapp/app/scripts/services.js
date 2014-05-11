function ExceptionService() {

  this.error = function (message) {
    console.error(message);
    alert(message);
  }

  this.getHttpErrorFunction = function (thisService) {
    var errorFunction = function (data, status, headers, config) {
      var message = 'Error ' + data;
      if (status === 0) {
        message = 'Unable to access server';
      }
      thisService.error(message);
    };
    return errorFunction;
  }

}

function ResourceService(config) {

  this.config = config;

  this.getPlayersPath = function () {
    return config.API_PATH + '/players';
  }

  this.getGamesPath = function () {
    return config.API_PATH + '/games';
  }

}
