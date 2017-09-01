'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './overview/overview.html',
            controller : 'overviewController'
        })
        .when('/admin', {
            templateUrl : './admin/add/addBook.html',
            controller : 'addController'
        })
        .when('/library-item/:id', {
            templateUrl : './detail/detail.html',
            controller : 'detailController'
        })
        .when('/profile', {
            templateUrl : './profile/profile.html',
            controller : 'profileController'
        });
}]);


