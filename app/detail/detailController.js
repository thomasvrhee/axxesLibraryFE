angular.module('myApp')
.controller('detailController', function($scope, $http, $routeParams) {
    'use strict';
        $scope.data = {};

        $scope.reserve = reserve;
        $scope.notifyWhenAvailable = notifyWhenAvailable;

        $http({
            method: 'GET',
            url: 'http://localhost:8080/bookDescriptions/' + $routeParams.id
        }).then(function (result) {
            $scope.data = result.data;
        });

        $http({
            method: 'GET',
            url: 'http://localhost:8080/bookDescriptions/' + $routeParams.id + '/authors'
        }).then(function (result) {
            $scope.data.authors = result.data._embedded.authors;
        });

        $http({
            method: 'GET',
            url: 'http://localhost:8080/bookDescriptions/' + $routeParams.id + '/tags'
        }).then(function (result) {
            $scope.data.tags = result.data._embedded.tags;
        });

        function reserve() {
            console.log('OK');
            // $http({
            //     method: 'POST',
            //     url: 'http://localhost:8080/bookDescriptions/' + $routeParams.id + '/tags'
            // }).then(function (result) {
            //     $scope.data.tags = result.data._embedded.tags;
            // });
        }

        function notifyWhenAvailable() {

        }
    });