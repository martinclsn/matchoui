'use strict';

var app = angular.module('matchoApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .constant('config', {
    API_PATH: 'http://localhost:8080/matchostat/rest'
  })
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
