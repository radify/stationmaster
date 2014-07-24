'use strict';

// Declare app level module which depends on filters, and services
angular.module('stationmaster', [
  'ngRoute',
  'stationmaster.services',
  'stationmaster.filters',
  'stationmaster.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({templateUrl: 'partials/table.html', controller: 'TableController'});
}]);
