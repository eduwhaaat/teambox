'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'Teams',
    'state': 'teams'
  },{
    'title': 'Termine',
    'state': 'events'
  },{
    'title': 'Nachrichten',
    'state': 'messages'
  },{
    'title': 'Kasse',
    'state': 'cashbox'
  },{
    'title': 'Statistik',
    'state': 'statistics'
  },{
    'title': 'Umfragen',
    'state': 'votes'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('teamboxApp')
  .controller('NavbarController', NavbarController);
