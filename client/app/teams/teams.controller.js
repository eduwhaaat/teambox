angular.module('teamboxApp')
  .controller('TeamsCtrl', function (UserService, $http, $scope) {

      // Create a new User
      $scope.createUser = function () {
        var event = {
          name: '24. Turnier',
          ort: 'Langenberg',
          datum: 'Mittwoch'
        };
        UserService.create(event, function (data) {
          // do something which you want with response
        });
      };
// Get a single event
      $scope.getUser = function () {
        UserService.get({id: 1234}, function (data) {
          // do something which you want with response
        });
      };


// Update a User
      $scope.updateUser = function () {
        UserService.update({id: 1234, ort: 'Langenberg'}, function (data) {
          // do something which you want with response
        });
      };

// Delete a User
      $scope.deleteUser = function () {
        UserService.remove({id: 1234}, function (data) {
          // do something which you want with response
        });
      };

    } /
  );
