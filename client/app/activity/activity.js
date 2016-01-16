'use strict';

angular.module('teaTimeApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('activity', {
        url: '/',
        templateUrl: 'app/main/activity.html',
        controller: 'ActivityController',
        controllerAs: 'activity'
      });
  });
