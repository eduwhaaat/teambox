'use strict';

angular.module('teamboxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/events',
        templateUrl: 'app/events/events.html',

      });
  });
