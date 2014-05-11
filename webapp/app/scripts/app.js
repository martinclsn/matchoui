/* exported app */
'use strict';

var app = angular.module('matchostatApp', ["ui.router", "ionic"])

  .constant('config', {
    API_PATH: 'http://localhost:8080/matchostat/rest'
  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "views/menu.html"
      })
      .state('app.main', {
        url: "/main",
        views: {
          'menuContent': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('app.players', {
        url: "/players",
        views: {
          'menuContent': {
            templateUrl: 'views/players.html',
            controller: 'PlayersCtrl'
          }
        }
      })
      .state('app.player', {
        url: "/players/:playerId",
        views: {
          'menuContent': {
            templateUrl: "views/player.html",
            controller: 'PlayerCtrl'
          }
        }
      })
      .state('app.addPlayer', {
        url: "/addPlayer",
        views: {
          'menuContent': {
            templateUrl: 'views/addPlayer.html',
            controller: 'PlayersCtrl'
          }
        }
      })
      .state('app.game', {
        url: "/game",
        views: {
          'menuContent': {
            templateUrl: 'views/game.html',
            controller: 'GameCtrl'
          }
        }
      });


    $urlRouterProvider.otherwise("/app/main");

  }
);

app.factory('exceptionService', function () {
  return new ExceptionService();
});

app.factory('resourceService', ['config',function (config) {
  return new ResourceService(config);
}]);
