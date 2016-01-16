'use strict';

class NavbarController {
  //start-non-standard
  menu = [
  {
    'title': 'Home',
    'state': 'main'
  },
  {
    'title': 'Profile',
    'state': 'profile'
  },
  {
    'title': 'Activity',
    'state': 'activity'
  }
];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('teaTimeApp')
  .controller('NavbarController', NavbarController);
