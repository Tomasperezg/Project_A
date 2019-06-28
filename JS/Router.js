"use strict";
{
  angular
    .module("homeApp")
    .config(($routeProvider) => {
      $routeProvider
        .when("/home", {
          template: "<home></home>"
        })
        .when("/projects", {
          template: "<projects></projects>"
        })
        .when("/projects/:ItemID",{
          template: "<projectdetail></projectdetail>"
        })
        .otherwise({redirectTo: "/home"});
    });
}
