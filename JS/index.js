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

});
