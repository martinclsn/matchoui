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
        //controller: function($scope) {}
      })
      .state('app.main', {
        url: "/main",
        views: {
          'menuContent' :{
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('app.players', {
        url: "/players",
        views: {
          'menuContent' :{
            templateUrl: 'views/players.html',
            controller: 'PlayersCtrl'
          }
        }

      })
      .state('app.game', {
        url: "/game",
        views: {
          'menuContent' :{
            templateUrl: 'views/game.html',
            controller: 'GameCtrl'
          }
        }
      })


    $urlRouterProvider.otherwise("/app/main");

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
