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

        getAvailableBooks();

        function getAvailableBooks() {
            $http({
                method: 'GET',
                url: 'http://localhost:8080/books/bydescription/' + $routeParams.id
            }).then(function (result) {
                $scope.availableBooks = 0;
                result.data.map(function (book) {
                    if (book.available === true) {
                        $scope.data.availableBook = book;
                        $scope.availableBooks++;
                    }
                });
                console.log("OK");
            });
        }


        function reserve() {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/rentals',
                data: {
                    start: '02-09-2017',
                    end: '03-09-2017',
                    book: 'http://localhost:8080/books/' + $scope.data.availableBook.id,
                    user: 'http://localhost:8080/libraryUser/1'
                }
            }).then(function() {
                getAvailableBooks();
            });
        }

        function notifyWhenAvailable() {

        }
    });