angular.module('myApp')
    .controller('overviewController', function($scope, $http, $routeParams) {
       $scope.bookName = '';

        $http({
            method: 'GET',
            url: 'http://localhost:8080/bookDescriptions'
        }).then(function successCallback(response) {
            $scope.books = response.data._embedded.bookDescriptions;
        }, function errorCallback(response) {
            console.log(response);
        });
});