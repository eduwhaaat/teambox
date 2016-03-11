'use strict';

angular.module('teamboxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('votes', {
        url: '/votes',
        templateUrl: 'app/votes/votes.html',
        controller: 'VotesCtrl'
      });
  });
