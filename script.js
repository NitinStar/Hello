var app=angular.module('single-page-app',['ngRoute']);


app.config(function($routeProvider){


    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        });
   
});


app.controller('cfgController',function($scope){

    $scope.message = "Hello world";
  
    // Bindable properties and functions

    $scope.cards = [];
    $scope.title = 'Dashboard';

    $scope.cards = [
{
    "Id": "54b52ea0b924ef3433491c2d",
    "OSS": {
        "Name": "Rowe Moran",
        "Company": "TALENDULA",
        "Image": "http://lorempixel.com/100/100/sports/"
    }
},
{
    "Id": "54b52ea0ca3b0ae85e780ad2",
    "OSS": {
        "Name": "Lorena Warren",
        "Company": "CYTREK",
        "Image": "http://lorempixel.com/100/100/sports/"
    }
},
{
    "Id": "54b52ea033a2c0b90c63d4f1",
    "OSS": {
        "Name": "Guthrie Howard",
        "Company": "BICOL",
        "Image": "http://lorempixel.com/100/100/sports/"
    }
},
{
    "Id": "54b52ea0ac080a7ea68023f4",
    "OSS": {
        "Name": "Cheri Sawyer",
        "Company": "ORGANICA",
        "Image": "http://lorempixel.com/100/100/sports/"
    }
},
{
    "Id": "54b52ea03063c4c95edd015d",
    "OSS": {
        "Name": "Kelly Vinson",
        "Company": "ZEPITOPE",
        "Image": "http://lorempixel.com/100/100/sports/"
    }
}
        ];


});
