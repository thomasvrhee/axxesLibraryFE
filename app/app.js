'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './overview/overview.html',
            controller : 'overviewController'
        })
        .when('/library-item/:id', {
            templateUrl : './detail/detail.html',
            controller : 'detailController'
        });
}]);


