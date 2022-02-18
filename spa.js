var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'about.html',
        controller: 'FirstController'
    }).when('/data', {
        templateUrl: 'data.html',
        controller: 'SecondController'
    }).when('/reg', {
        templateUrl: 'reg.html',
        controller: 'ThirdController'
    }).otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = 'The relm of legal studies creates a framework for the modern world to create a civil and just society. Individuals across the globe strives to understand the concepts of the law of the land by taking a keen interest in legal studies, this can be achieved through peer discussions. Through this product we aim to create a viable product that helps the students and lawyers in the field of legal studies to communicate with each other, thus creating a robust and prudent community of individuals who has a keen interest in the field of law.';

});


app.controller('SecondController', function($scope, $http) {
    $http.get('https://bernardbdas.github.io/wsd-lab9/users.json')
        .success(function(response) {
            $scope.names = response.users;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://bernardbdas.github.io/wsd-lab9/users.json')
        .success(function(response) {
            $scope.names = response.users;
            console.log($scope.myData);
            $scope.rowlimit = 6;
        });
});

//custom filter 1 : Makes the first char of the name capital
app.filter('formatName', function() {
    return function(input) {
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
});

//custom filter 2 : Limits the no. of rows displayed
app.filter("limitRow", function() {
    return function(input, option) {
        if (isNaN(option) || (option == "")) {
            return input;
        } else {
            return input.substring(0, option).toLowerCase();
        }
    }
});

//custom filter 3 : Adds country code "+91-" before every phone number
app.filter('formatNum', function() {
    return function(input) {
        return "+91-" + input;
    }
});