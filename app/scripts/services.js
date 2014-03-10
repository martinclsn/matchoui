var matchoServices = angular.module('matchoServices', ['ngResource']);

matchoServices.factory('Player', ['$resource',
  function($resource){
    return $resource('players/:playerId', {}, {
      query: {method:'GET', params:{playerId:'players'}, isArray:true}
    });
  }]);