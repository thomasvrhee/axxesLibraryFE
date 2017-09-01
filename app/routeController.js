
myApp.config([ '$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
} ]);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'overview/overview.html',
        controller : 'overviewController'
    });
});