'use strict';

angular.module('teamboxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cashbox', {
        url: '/cashbox',
        templateUrl: 'app/cashbox/cashbox.html',
        controller: 'CashboxCtrl'
      });
  });
