"use strict";
var index = angular.module("App",  ["ngRoute", "ngAnimate"]);

index.controller("controller",function($scope){

  $scope.NavBarItemList = [
    {Link: "#!/home", name: 'Home'},
    {Link: "#!/contact", name: 'Contact'},
    {Link: "#!/projects", name: 'Projects'},
    {Link: "#!/mentions", name: 'Mentions'},
    {Link: "#!/whoarewe", name: 'Who are we?'}
  ];


   $scope.NavBarDisplay = "hide";
    $scope.NavBar_Open = function(){
        if ($scope.NavBarDisplay)
            $scope.NavBarDisplay = "";

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
