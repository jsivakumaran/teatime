'use strict';

angular.module('teaTimeApp')

  .controller('MainController', function($scope) {
    $scope.map = {
      center: [49.28, -123.12]
    }
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
  });
