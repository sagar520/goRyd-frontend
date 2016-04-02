
var app = angular.module('app' , []);

app.controller('main' , function($scope ,$http){
  $scope.testVar = "simple text";

  $scope.listings = [
    {name : "Yamaha" , vendorNum : 1 , minRate : 10},
    {name : "pulsur" , vendorNum : 1 , minRate : 10},
    {name : "CBZ" , vendorNum : 1 , minRate : 10},
    {name : "Bullet" , vendorNum : 1 , minRate : 10},
    {name : "ME" , vendorNum : 1 , minRate : 10},
  ]


})
