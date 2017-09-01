angular.module('myApp')
    .controller('overviewController', function($scope, $http, $routeParams) {
       $scope.bookName = "";
        // Simple GET request example:
        $http({
            method: 'GET',
            url: 'http://localhost:8080/bookdescriptions'
        }).then(function successCallback(response) {
            console.log("Success")
            $scope.books = response;

        }, function errorCallback(response) {
           console.log(response);
        });
})