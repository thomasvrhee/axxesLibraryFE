angular.module('myApp')
    .controller('overviewController', function($scope, $http, $routeParams) {
        $scope.bookName = "";

       $scope.dummyList = [
            {title: 'OCA Exam preparation', author:'bob', url: 'images/Book for Java SE 8 Certification.jpg'},
            {title: 'Clean code', author:'bob', url: 'images/cleanCode.jpg'},
            {title: 'dummy3', author:'bob', url: 'images/Book for Java SE 8 Certification.jpg'},
            {title: 'dummy4', author:'bob', url: 'images/Book for Java SE 8 Certification.jpg'},
            {title: 'dummy5', author:'bob', url: 'images/Book for Java SE 8 Certification.jpg'},
            {title: 'dummy6', author:'bob', url: 'images/Book for Java SE 8 Certification.jpg'},
        ]
})