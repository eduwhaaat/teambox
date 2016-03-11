'use strict';

angular.module('teamboxApp.auth', [
  'teamboxApp.constants',
  'teamboxApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
