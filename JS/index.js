"use strict";
var index = angular.module("App", ["ngRoute", "ngAnimate"]);

index.controller("controller",function($scope){
   $scope.NavBarDisplay = "hide";
    $scope.NavBar_Open = function(){
        if ($scope.NavBarDisplay === "hide")
            $scope.NavBarDisplay = "NavBar";

         else
            $scope.NavBarDisplay = "hide";

    };
    $scope.HideNavBar = function(){
      if ($scope.NavBarDisplay === "hide")
          $scope.NavBarDisplay = "NavBar";

       else
          $scope.NavBarDisplay = "hide";
    }
});
