/* exported app */
'use strict';

var app = angular.module('matchostatApp', [
    "ui.router"
  ])
  .constant('config', {
    API_PATH: 'http://localhost:8080/matchostat/rest'
  })
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("");

    $stateProvider
      .state('main', {
        url: "",
        templateUrl: 'views/main.html'
      })
      .state('players', {
        url: "/players",
        templateUrl: 'views/players.html'
      })
      .state('game', {
        url: "/game",
        templateUrl: 'views/game.html'
      })


/*    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/players', {
        templateUrl: 'views/players.html',
        controller: 'PlayersCtrl'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });*/
  });
