angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'christ/home.html',
        controller:'homectrl'}).when('/home/:first/:last',
        {
            templateUrl:'christ/home.html',
            controller:'homectrl'
    }).when('/course',
    {
        templateUrl:'christ/course.html',
        controller:'coursectrl'
    }).when('/House',
    {
        templateUrl:'christ/House.html',
        controller:'studentctrl'
    })
})
.controller('myctrl',function()
{

})
.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="Sweet Home"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})
.controller("coursectrl",function($scope,$http)
{
    // $http.get('houseinfo.json')
    // .success(function(response)
    // {
    //     $scope.houseinformation=response.record;
    // });
    $http.get('https://raw.githubusercontent.com/MeghanaM2/Agular-/main/house.json')
    .success(function(response)
    {
        $scope.houseinformation=response.houseInformation; 
    });

})


.controller("studentctrl",function($scope,$http)
{
    // $http.get('houseinfo.json')
    // .success(function(response)
    // {
    //     $scope.houseinformation=response.record;
    // });
    $http.get('https://raw.githubusercontent.com/MeghanaM2/Agular-/main/house.json')
    .success(function(response)
    {
        $scope.houseinformation=response.houseInformation; 
    });
})
// .controller.filter("myfilter",function($scope)
// {
//     return function(input)
//     {
//        return input.substring(0,1).toUpperCase()+input.substring(1,undefined).toLowerCase();
//     }
// })
// .controller.filter("filtercity",function(){

//     return function(input)
//     {    
//     input = input.split(',');
//     for (var i = 0; i < input.length; i++) {
//     input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
//     }
//    input = input.join(" ");
//    return(input);
// }

// });



