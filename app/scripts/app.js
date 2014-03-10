'use strict';

angular.module('matchoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'matchoServices'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/players', {
        templateUrl: 'views/players.html',
        controller: 'PlayersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
