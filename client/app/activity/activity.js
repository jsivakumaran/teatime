'use strict';

angular.module('teaTimeApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('activity', {
        url: '/',
        templateUrl: 'app/activity/activity.html',
        controller: 'ActivityController',
        controllerAs: 'activity'
      });
  });


