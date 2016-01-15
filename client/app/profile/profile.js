'use strict';

angular.module('teaTimeApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      });
  });
