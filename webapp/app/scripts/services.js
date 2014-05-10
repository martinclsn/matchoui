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