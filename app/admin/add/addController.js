angular.module('myApp')
    .controller('addController', function($scope, $http, $routeParams) {
        $scope.bookDescription = {};
        $scope.bookTags = "";
        $scope.bookDescription.tags = [];
        $scope.bookDescription.authors = [];

        $scope.authors = "";

        $scope.saveBooks = function () {
            setTags();
            setAuthors();

            console.log($scope.bookDescription);

            var req = {
                method: 'POST',
                url: 'http://localhost:8080/bookDescriptions',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.bookDescription
            }

            $http(req).then(function(){
                console.log('Safe Successfull');
                },
                function(){
                console.log('Safe failed');
            });

        }

        function setTags(){
            var tagArray = $scope.bookTags.split(",");

            console.log(tagArray.length);
            for(var i = 0; i < tagArray.length; i++ ){
                $scope.bookDescription.tags.push({ "name":tagArray[i] });
            }

        }

        function setAuthors() {
          $scope.bookDescription.authors = [];
            $scope.bookDescription.authors.push({"firstname": $scope.author.firstname, "lastname": $scope.author.lastname })



        }
    })