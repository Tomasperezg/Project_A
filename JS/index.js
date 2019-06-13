"use strict";
var index = angular.module("App", ["ngRoute", "ngAnimate"]);

index.controller("controller",function($scope){
   $scope.NavBarDisplay = "hide";
    $scope.NavBar_Open = function(){
        if ($scope.NavBarDisplay === "hide")
            $scope.NavBarDisplay = "NavBar_Container";
         else
            $scope.NavBarDisplay = "hide";
    };
});
