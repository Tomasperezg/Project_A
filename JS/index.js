"use strict";
var index = angular.module("homeApp",  ["ngRoute", "ngAnimate","ui.bootstrap", "ngTouch"]);

index.controller("controller",function($scope){

  $scope.NavBarItemList = [
    {Link: "#!/home", name: 'Home'},
    {Link: "#!/contact", name: 'Contact'},
    {Link: "#!/projects", name: 'Projects'},
    // {Link: "#!/mentions", name: 'Mentions'},
    {Link: "#!/about", name: 'About'}
  ];

   // $scope.NavBarDisplay = "hide";
   //  $scope.NavBar_Open = function(){
   //      if ($scope.NavBarDisplay === "hide")
   //          $scope.NavBarDisplay = "NavBar";
   //
   //       else
   //          $scope.NavBarDisplay = "hide";
   //
   //  };
   //
   //  $scope.HideNavBar = function(){
   //    if ($scope.NavBarDisplay === "hide")
   //        $scope.NavBarDisplay = "NavBar";
   //
   //     else
   //        $scope.NavBarDisplay = "hide";
   //  };
   //
   //  $scope.HideNavBar = function(){
   //    $scope.NavBarDisplay = "hide";
   //  }


});
