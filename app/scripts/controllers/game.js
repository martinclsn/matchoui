'use strict';

angular.module('matchoApp')
  .controller('GameCtrl', function ($scope, $http, config) {
    $scope.data = [];
    $scope.name = 'World';
  });
