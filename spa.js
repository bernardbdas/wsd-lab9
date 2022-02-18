var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'aboutus.html',
        controller: 'FirstController'
    })

    .when('/manipulate', {
        templateUrl: 'manipulate.html',
        controller: 'SecondController'
    })

    .when('/traindata', {
        templateUrl: 'traindata.html',
        controller: 'ThirdController'
    })

    .otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = ' Train identification information is also collected from each of the train origination stations. The TMS system processes all this information and provides an integrated real-time display and status indications of train positions and movements as well as signals and route interlocking status. TMS management functions use this integrated data to decide on induction and withdrawal of rakes, diversion of trains, planning reversal of rakes, and so on. Control information from TMS is fed to route relay interlocking at several locations to allow remote activation of points and signals and set routes for trains. ';

});


app.controller('SecondController', function($scope, $http) {
    $http.get('https://adhokshaja73.github.io/spa.github.io/train.json')
        .success(function(response) {
            $scope.names = response.trainemp;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://adhokshaja73.github.io/spa.github.io/train.json')
        .success(function(response) {
            $scope.names = response.trainemp;
            $scope.rowlimit = 6;
        });
});