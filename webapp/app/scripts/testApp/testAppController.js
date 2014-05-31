'use strict';

angular.module('testApp')
  .controller('testAppCtrl', function ($scope, $http) {
    $scope.threeLetters = ['A','B','C'];

    $scope.queryUsers = function () {
      $http.get('http://localhost:3000/databases/ascrum/collections/users')
        .success(function (data) {
          $scope.users = data;
        }).error(function () {
          throw new Error('Something went wrong...');
        });
    };
  });
