'use strict';

angular.module('teamboxApp')
  .controller('EventsCtrl',

    [ 'EventService', '$scope', function (EventService, $scope) {

      // Create a new event
      $scope.createEvent = function() {
        var event = {
          name: '24. Turnier',
          ort: 'Langenberg',
          datum: 'Mittwoch'
        };
        EventService.create(event, function(data) {
          // do something which you want with response
        });
      };

      // Get a single event
      $scope.getEvent = function() {
        EventService.get({id: 1234}, function(data) {
          // do something which you want with response
        });
      };

      // Get a all events
      $scope.getEvent = function() {
        EventService.query();
      };
      // Update a event
      $scope.updateEvent = function() {
        EventService.update({id: 1234,ort:'Langenberg'}, function(data) {
          // do something which you want with response
        });
      };

      // Delete a event
      $scope.deleteEvent = function() {
        EventService.remove({id: 1234}, function(data) {
          // do something which you want with response
        });
      };

    }]


  );
