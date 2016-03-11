'use strict';

angular.module('teamboxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teams', {
        url: '/teams',
        templateUrl: 'app/teams/teams.html',
        controller: 'TeamsCtrl'
      });
  });
